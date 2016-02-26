import React from 'react';
import { Component } from 'react';
import Search from './search';
import Navbar from './navbar';

export default class App extends Component {

	
	render() {
		return (
			<div>
				<Navbar />
				<div className="main-content">
						<Search />
						{this.props.children}
				</div>
			</div>
		);
	}
}

