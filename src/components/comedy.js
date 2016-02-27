import React, { Component } from 'react';
import { music, sports, theatre, comedy } from '../actions/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link, browserHistory } from 'react-router';

export default class Comedy extends Component {

	componentDidMount(){
	
		this.props.comedy()
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
				<h1>COMEDY</h1>
			{this.props.data.map(this.renderEvent)}</div>
		)
	}
}

function mapStateToProps(state){
	return ({ 
		data:  state.getmusic,
		data:  state.getsports,
		data:  state.getmusic,
		data:  state.getmusic
	})
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ 
		music: music,
		sports: sports,
		theatre: theatre,
		comedy: comedy
	 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comedy);

