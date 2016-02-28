import React, { Component } from 'react';
import moment from 'moment';

class SearchResults extends Component {
	renderEvent(event){
		const events = event.map(data=>{

			const dateStr = moment(event.datetime_local).format('ll')
			const date = dateStr.slice(0, dateStr.indexOf(',')).toUpperCase();
			const title = data.short_title;
			const venueTitle = data.venue.name;
			const venueAddress = data.venue.extended_address;
			const url = data.url;

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
		data:  state.getinfo
	})
}


export default connect(null, mapDispatchToProps)(Music);