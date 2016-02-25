import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { info } from '../actions/index';
import { upEvents } from '../actions/index';
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

	handleOnSubmit(e){

		e.preventDefault();
		this.props.info(this.state.query);
		this.setState({ query: ''})
	}

	handleOnChange(e){
		this.setState({ query: e.target.value})
	}

	renderEvents(event){
		const eventDetail = event.map(data=>{
			return <li>{data.short_title}</li>
		})

		return <ul>{eventDetail}</ul>
	}

	renderGeoLocation(data){
		
		return <h4>{moment().format('ll')} Your Location: {data[0].data.meta.geolocation.display_name}</h4>
	}

	componentDidMount(){

		this.props.upEvents();

	}

	renderUpcomingEvents(event){

		var rows = []

		event.map(data=>{
			return rows.push(<UpcomingEvents title={data.short_title} />)	
		})

		return <ul>{rows}</ul>;
	}

	render() {
		return (

			<div className="row">
				<div className="col-lg-12">
					<div className="input-group">
						<input type="text" className="form-control" value={this.state.query} onChange={this.handleOnChange}/>
						<span className="input-group-btn">
						<button className="btn btn-default" type="button" onClick={this.handleOnSubmit}>Go!</button>
						</span>
					</div>
				</div>


				<div>{this.props.sUpEvents.map(this.renderUpcomingEvents)}</div>
				
				<hr/>
				<div className="col-md-12">
					{this.props.data.map(this.renderEvents)}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return ({ 
		data: state.getInfo ,
		sUpEvents:  state.getUpEvents
	})
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ 
		info: info,
		upEvents: upEvents
	 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);