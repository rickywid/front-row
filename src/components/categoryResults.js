import React, { Component } from 'react';
import { music } from '../actions/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link, browserHistory } from 'react-router';

export default class Category extends Component {

	componentDidMount(){
		this.props.music()
	}

	renderEvent(event){
		const eventList = event.map(data=>{
			return <li>{data.short_title}</li>
		})

		return <ul>{eventList}</ul>
	}

	render(){
		return (
			<div>{this.props.data.map(this.renderEvent)}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);

