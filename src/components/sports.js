import React, { Component } from 'react';
import { music, sports, theatre, comedy } from '../actions/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link, browserHistory } from 'react-router';

export default class Sports extends Component {

	componentDidMount(){
		
		this.props.sports() 
	
	}

	renderEvent(event){
		const eventList = event.map(data=>{
			return <li>{data.short_title}</li>
		})

		return <ul>{eventList}</ul>
	}

	render(){
		return (
			<div>
			<h1>SPORTS</h1>
			{this.props.data.map(this.renderEvent)}</div>
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

