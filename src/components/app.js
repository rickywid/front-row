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
				<Navbar />
				<div className="main-content">


					<div className="row">
						<div className="col-lg-12">
							<div className="input-group">

								<input type="text" className="form-control" value={this.state.query} onChange={this.handleOnChange}/>
								<span className="input-group-btn">
								<button className="btn btn-default" type="button" onClick={this.handleOnSubmit}>Go!</button>
								</span>
							</div>
							{this.props.sUpEvents}
						</div>
						
						<hr/>
						<div className="col-md-12">
							<Link to ="/category/music/events">Music</Link>
							<Link to ="/category/sports/events">Sports</Link>
							<Link to ="/category/theatre/events">Theatre</Link>
							<Link to ="/category/comedy/events">Comedy</Link>
							
							{this.props.children}

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