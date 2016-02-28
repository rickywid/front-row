import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link, browserHistory } from 'react-router';

//actions
import { info, music, upEvents } from '../actions/index';

//components
import Search from './search';
import Navbar from './navbar';
import Music from './music';

class App extends Component {

	constructor(props){
		super(props);

		this.state = { query: ''}
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

	componentDidMount(){

		this.props.upEvents();
	}

	handleOnSubmit(e){

		e.preventDefault();
		this.props.info(this.state.query)
			.then(()=>{
				browserHistory.push('/search')

			});
		this.setState({ query: ''})
	}

	handleOnChange(e){
		this.setState({ query: e.target.value})
	}



	render() {
		return (
			<div>
				<nav className="navbar navbar-default">
				  <div className="container-fluid">

				    <div className="navbar-header">
				      <Link className="navbar-brand" to="/">FRONT-ROW</Link>
				    </div>

				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav">
				        <li><Link to ="/category/music/events">Music</Link></li>
						<li><Link to ="/category/sports/events">Sports</Link></li>
						<li><Link to ="/category/comedy/events">Comedy</Link></li>
				      </ul>
				      <form className="navbar-form navbar-left" role="search" onSubmit={this.handleOnSubmit}>
				        <div className="form-group">
				          <input 	type="text" 
				          			className="form-control" 
				          			placeholder="Search Performer, Event, City..." 
				          			value={this.state.query}
				          			onChange={this.handleOnChange}
				          />
				        </div>
				        <button type="submit" className="btn btn-default">Submit</button>
				      </form>
				      <ul className="nav navbar-nav navbar-right">
				        <li><a href="#"><i className="fa fa-map-marker"></i> {this.props.sUpEvents.geo}</a></li>

				      </ul>
				    </div>
				  </div>
				</nav>
				<div className="container">


					<div>
						<div className="row">
							<div className="col-md-12">
								{this.props.children}

								<div className="col-md-3">
									<ul>
										<li><a href="#">Ticketmaster</a></li>
										<li><a href="#">Ticketmaster</a></li>
										<li><a href="#">Ticketmaster</a></li>
									</ul>
								</div>

								<div className="col-md-3">
									<ul>
										<li><a href="#">Ticketmaster</a></li>
										<li><a href="#">Ticketmaster</a></li>
										<li><a href="#">Ticketmaster</a></li>
									</ul>
								</div>

								<div className="col-md-3">
									<ul>
										<li><a href="#">Ticketmaster</a></li>
										<li><a href="#">Ticketmaster</a></li>
										<li><a href="#">Ticketmaster</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return ({ 
		data: state.getInfo ,
		sUpEvents:  state.getUpEvents,
	})
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ 
		info: info,
		upEvents: upEvents,
	 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);