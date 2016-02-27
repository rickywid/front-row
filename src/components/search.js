import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Search extends Component {
	
	searchResults(event){
		console.log(event)
		const result =  event.map(data=>{
			const title = data.title;
			const date = data.datetime_local;
			const time = data.datetime_local;
			const venue_loc = data.venue.display_location;
			const venue_name = data.venue.name;
			const price_low = data.stats.lowest_price;
			const ticket_count = data.stats.listing_count;

			return (
				<li>
					<h4>{title}</h4>
					<p>{date}</p>
				</li>

			)
		})
		return <ul>{result}</ul>
	}
	
	render(){
		return (
			<div className="col-md-12">{this.props.data.map(this.searchResults)}</div>
		)
	}
}

function mapStateToProps(state){
	return ({ data: state.getInfo})
}

export default connect(mapStateToProps, null)(Search)