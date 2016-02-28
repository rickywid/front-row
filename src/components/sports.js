import React, { Component } from 'react';
import { music, sports, comedy } from '../actions/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link, browserHistory } from 'react-router';

export default class Sports extends Component {

	componentDidMount(){
		
		this.props.sports() 
	
	}

	renderEvent(event){
		const events = event.map(data=>{
			

			const dateStr = moment(event.datetime_local).format('ll')
			const date = dateStr.slice(0, dateStr.indexOf(',')).toUpperCase();
			const title = data.short_title;
			const venueTitle = data.venue.name;
			const venueAddress = data.venue.extended_address;

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
						<button className="btn btn-success buy-now">Buy Tickets</button>
					</div>
				</li>
				</div>
			)
		})
		return <ul>{events}</ul>
	}

	render(){
		return (
			<div>
				<div className="col-md-12">
					<h1>SPORTS EVENTS</h1>
				</div>
				<div className="col-md-9">

						{this.props.data.map(this.renderEvent)}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return ({ data:  state.getsports })
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ sports: sports }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sports);

