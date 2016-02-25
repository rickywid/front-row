import React, { Component } from 'react';

export default class EventDetail extends Component {
	
	renderEvent(event){
		const img = event.map(name=>{
			return <li><img src={name.image} /></li>
		})

		return <div>{img}</div>
	}

	render(){
		return (
			<div>
				<ul>{this.props.event.map(this.renderEvent)}</ul>
			</div>
		)
	}
}