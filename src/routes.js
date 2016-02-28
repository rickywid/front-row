import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Search from './components/search';
import Music from './components/music';
import Sports from './components/sports';
import Comedy from './components/comedy';
import Event from './components/event';
import Index from './components/index';

export default (

	<Route path="/first-row" component={App}>
		<IndexRoute component={Index} />
		<Route path="/category/music/:category_name" component={Music} />
		<Route path="/category/sports/:category_name" component={Sports} />
		<Route path="/category/comedy/:category_name" component={Comedy} />
		<Route path="/search" component={Search} />
		<Route path="/event/:event" component={Event} />
	</Route>

)