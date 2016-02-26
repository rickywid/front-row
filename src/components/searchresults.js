import React, { Component } from 'react';
import moment from 'moment';

export default class SearchResults extends Component {
	render(){
		return (
			<div className="row">
				<div className="col-md-4">
					<h3>{moment(this.props.date).format('ll')}</h3>
				</div>

				<div className="col-md-6">
					<h4>
						{this.props.title}
					</h4>
					<p>
						{this.props.venue}, {this.props.venue_address}
					</p>
					
					<p>{this.props.ticket_count}</p> 
				</div>

				<div className="col-md-2">
					<h5>{this.props.price_low}</h5>
				</div>
			</div>
		)
	}
}