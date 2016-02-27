import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link, browserHistory } from 'react-router';

//actions
import { upEvents } from '../actions/index';


class Index extends Component {

	componentDidMount(){
		this.props.upEvents();
	}

	renderEvent(event){
		return <li>{event.short_title}</li>
	}

	render() {
		return (
			<ul>
				{this.props.data.events.map(this.renderEvent)}
				
			</ul>
		);
	}
}

function mapStateToProps(state){
	return ({ data:  state.getUpEvents })
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ upEvents: upEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);