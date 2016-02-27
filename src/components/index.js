import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link, browserHistory } from 'react-router';

//actions
import { info, music, upEvents } from '../actions/index';


class Index extends Component {

	componentDidMount(){
		this.props.upEvents();
	}

	render() {
		return (
			<div>
				{console.log(this.props.data)}
			</div>
		);
	}
}

function mapStateToProps(state){
	return ({ data:  state.getUpEvents })
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ upEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);