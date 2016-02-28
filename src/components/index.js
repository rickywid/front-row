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

		const dateStr = moment(event.datetime_local).format('ll').toUpperCase();
		const date = dateStr.slice(0, dateStr.indexOf(','));
		return (


			<div className="col-md-4 featured-event">
	
						<li className="popular-events">
							<div className="row">
								<div className="col-md-12">
							
									<h5 className="featured-title">{event.short_title}</h5>
								<div className="col-md-12 event-date">
								<div className="col-md-6 no-padding">
									<h3 className="event-title">{date}</h3>
									</div>
									<div className="col-md-6">
									<button className="btn btn-success featured-buy">Buy Tickets</button>
									</div>
								</div>
						</div>

						</div>
						
						
							<img className="img-responsive" src={event.performers[0].image ? event.performers[0].image : "./src/images/frontrow.png" } />
						</li>
		</div>

			
		)
	}

	render() {
		return (
			<div>
				<div className="col-md-12"><h3>Featured Events</h3></div>
		
	

								<div className="col-md-9">
								
				{this.props.data.events.map(this.renderEvent)}
	</div>
				
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