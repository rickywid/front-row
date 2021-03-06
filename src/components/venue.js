import React, { Component } from 'react';
import { music, sports, comedy } from '../actions/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link, browserHistory } from 'react-router';

export default class Music extends Component {

	componentDidMount(){
		
		this.props.music() 

	}

	renderEvent(event){
		const events = event.map(data=>{

			const dateStr = moment(event.datetime_local).format('ll')
			const date = dateStr.slice(0, dateStr.indexOf(',')).toUpperCase();
			const title = data.short_title;
			const venueTitle = data.venue.name;
			const venueAddress = data.venue.extended_address;
			const url = data.url;
			const priceLow = data.stats.lowest_price;

			return (
				<div className="col-md-12">
				<li className="popular-events">
					<div className="col-md-1 date-box">
						<h4 className="date">{date}</h4>
					</div>
					<div className="col-md-8">
						<h5>{title}</h5>
						<p className="venue">{venueTitle} - {venueAddress}</p>
					</div>
					<div className="col-md-3 button-price">
						<a href={url}><button className="btn btn-success buy-now">Buy Tickets</button></a>
						<p className="price-low"><span className="from">from</span> ${priceLow}</p>
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
					<h3>MUSIC EVENTS</h3>
				</div>
				<div className="col-md-9 main-content">

					
						{this.props.data.map(this.renderEvent)}
		
				</div>	
			</div>
		)
	}
}

function mapStateToProps(state){
	return ({ 
		data:  state.getmusic
	})
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ 
		music: music
	 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);

