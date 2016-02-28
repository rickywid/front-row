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
		return (

<div className="col-md-3">
						<li className="popular-events">
							<h5>{event.short_title}</h5>
							<h3>{moment(event.datetime_local).format('ll')}</h3>
							<img src={event.performers[0].image ? event.performers[0].image : null } />
						</li>
			
</div>
			
		)
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12"><h1>Featured Events</h1></div>
				<ul>
	

					
				{this.props.data.events.map(this.renderEvent)}
	
				</ul>
			</div>
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