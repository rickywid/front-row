import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { info } from '../actions/index';
import moment from 'moment';


export default class UpcomingEvents extends Component {

	render(){

		const str = this.props.date.indexOf(',')
		
		const newdate = this.props.date.slice(0, str)

		return (
			<div className="col-md-4">
				<li className="upcoming-events-container">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">{this.props.title}</h3>
						</div>
						<div className="panel-body">
							<img src={this.props.image} />
						</div>
						<div className="panel-footer">{newdate}</div>
					</div>						
				</li>
			</div>
		)
	}
}
