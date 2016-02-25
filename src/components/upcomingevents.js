import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { info } from '../actions/index';
import moment from 'moment';


class UpcomingEvents extends Component {

	componentDidMount(){
		this.props.info();
	}

	renderEvent(event){

		const name = event.performers[0].name;
		const x = (moment(event.datetime_local).format('ll'))
		const date = (x.slice(0, x.indexOf(',')));

		//console.log(moment(date, moment.ISO_8601));

		return 	(
			<div className="col-md-2 event-col">
				<li className="list-group-item upcoming-events"><h2>{date}</h2>{name}</li>
			</div>
		)
	}

	render(){
		return (
			<div className="upcoming-events-container">
				<h4>HOT Events</h4>
				<div className="upcoming-events-group">

					
				</div>

			</div>
		)
	}
}

function mapStateToProps(state){
	return ({ data: state.getInfo })
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ info }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingEvents);
