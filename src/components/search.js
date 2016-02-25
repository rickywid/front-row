import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { info } from '../actions/index';
import Search from './search';
import UpcomingEvents from './upcomingevents';

import axios from 'axios';


class App extends Component {

	constructor(props){
		super(props);

		this.state = { query: ''}
		this.state = { upcomingevents: []}
		this.state = { loaded: false }
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
		this.renderEvents = this.renderEvents.bind(this);


	}

	componentWillReceiveProps(props){
		this.setState({upcomingevents: props.data[0][1].data.events})
	}

	handleOnSubmit(e){

		e.preventDefault();
		this.props.info(this.state.query);
		this.setState({ query: ''})
	}

	handleOnChange(e){
		this.setState({ query: e.target.value})
	}

	renderEvents(event){
		const eventDetail = event[0].data.events.map(data => {
			return (
				<div>
					<li>{data.short_title}</li>	
				</div>
			)
		})
		return <ul>{eventDetail}</ul>
	}

	renderGeoLocation(data){
		
		return <h4>{moment().format('ll')} Your Location: {data[0].data.meta.geolocation.display_name}</h4>
	}

	render() {
		return (
			<div className="col-md-12">
				<form onSubmit={this.handleOnSubmit} className="search-input">
					<input type="text" className="form-control" value={this.state.query} onChange={this.handleOnChange}/>
					<input type="submit" value="Submit" />
				</form>
				{this.props.data.map(this.renderGeoLocation)}


				<UpcomingEvents event={this.state.upcomingevents} />
				
				<hr/>
				<div>

					{this.props.data.map(this.renderEvents)}					
	
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return ({ data: state.getInfo })
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ info }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);