import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { info } from '../actions/index';
import moment from 'moment';


export default class UpcomingEvents extends Component {

	render(){
		return (
			<div className="col-md-2">
				<li className="upcoming-events-container">
						{this.props.title}
				</li>
			</div>
		)
	}
}

