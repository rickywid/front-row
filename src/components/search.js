//packages
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link } from 'react-router';

//actions
import { info } from '../actions/index';
import { upEvents } from '../actions/index';

//components
import SearchResults from './searchresults';
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

	componentDidMount(){

		this.props.upEvents();

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

			const title = data.short_title;
			const date = data.datetime_local;
			const ticket_count = data.stats.listing_count;
			const venue = data.venue.name;
			const venue_address = data.venue.extended_address;
			const price_low = data.stats.lowest_price;


			
			return <li><SearchResults 	title={title} 
										date={date} 
										ticket_count={ticket_count} 
										venue={venue} 
										venue_address={venue_address}
										price_low={price_low}
					/>
					<hr/>
			</li>
		})

		return <ul>{eventDetail}</ul>
	}

	renderGeoLocation(data){

		const curr_loc = data[0].data.meta.geolocation.display_name;
		const curr_date = moment().format('ll');
		return <h4>{ curr_loc + " " + curr_date }</h4>;
	}

	renderUpcomingEvents(event){
		
		var rows = []

		event[0].data.events.map(data=>{
			const title = data.short_title;
			const date = moment(data.datetime_local).format('ll');
			const img = data.performers[0].image;

			return rows.push(<UpcomingEvents title={title} date={date} image={img}/>)
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

					<div className="col-md-12">
						{this.props.sUpEvents.map(this.renderGeoLocation)}
					</div>


				<div className="panel panel-default margin-fix">
					<div className="panel-body">
						{console.log(this.props.sUpEvents)}
						{this.props.sUpEvents.map(this.renderUpcomingEvents)}
						}
					</div>
				</div>
				
				<hr/>
				<div className="col-md-3">
					<div className="panel panel-default">
						<div className="panel-heading">
					    	<h3 className="panel-title">Categories</h3>
					  	</div>
					 <div className="panel-body">
					 	   <ul className="left-menu-col">
					    		<li><Link to="category/music">Music</Link></li>
					    		<li>Sports</li>
					    		<li>Arts & Theatre</li>
					    		<li>Miscellaneous</li>
					    	</ul>
					  	</div>
					</div>

					<div className="panel panel-default">
					  	<div className="panel-heading">
					   		 <h3 className="panel-title">Event</h3>
					  	</div>
					 	 <div className="panel-body">
					   	     <ul className="left-menu-col">
					    		<li>Toronto Blue Jays</li>
					    		<li>Toronto Raptors</li>
					    		<li>Toronto Maple Leafs</li>
					    		<li>Grand Slam Of Curling</li>
					    		<li>The Model Apartment</li>
					    	</ul>
					  	</div>
					</div>

					<div className="panel panel-default">
					  	<div className="panel-heading">
					   		 <h3 className="panel-title">Venues</h3>
					  	</div>
					  	<div className="panel-body">
					    	<ul className="left-menu-col">
					    		<li>Rogers Center</li>
					    		<li>Air Canada Centre</li>
					    		<li>Toronto Maple Leafs</li>
					    		<li>The Danforth Music Hall</li>
					    		<li>Greenwin Theatre at the Toronto Centre for the Arts</li>
					    		<li>Sony Centre For The Performing Arts</li>
					    	</ul>
					  	</div>
					</div>
				</div>
				<div className="col-md-9">
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