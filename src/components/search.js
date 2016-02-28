import React, { Component } from 'react';
import { music, sports, comedy } from '../actions/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link, browserHistory } from 'react-router';

export default class Search extends Component {
	
	renderEvent(event){
		
			const dateStr = moment(event.datetime_local).format('ll')
			const date = dateStr.slice(0, dateStr.indexOf(',')).toUpperCase();
			const title = event.short_title;
			const venueTitle = event.venue.name;
			const venueAddress = event.venue.extended_address;
			const url = event.url;

			return (
				<div className="col-md-12">
		
				<li className="popular-events">
					<div className="col-md-1 date-box">
						<h4 className="date">{date}</h4>
					</div>
					<div className="col-md-8">
						<h5>{title}</h5>
						<p>{venueTitle} - {venueAddress}</p>
					</div>
					<div className="col-md-3">
						<a href={url}><button className="btn btn-success buy-now">Buy Tickets</button></a>
					</div>
				</li>
				</div>

			)
	
		return <ul>{events}</ul>
	}

	render(){
		return (
			<div>
				<div className="col-md-12">
					<h3>Search Results {this.props.data.length} </h3>
					
					{this.props.data.length === 0 ? "No results found. Please try another search." : null }
				</div>
				<div className="col-md-9 main-content">
						{this.props.data.events.map(this.renderEvent)}
					
					
						
		
				</div>	
			</div>
		)
	}
}

function mapStateToProps(state){
	return ({ 
		data:  state.getresults
	})
}


export default connect(mapStateToProps, null)(Search)