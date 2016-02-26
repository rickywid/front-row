import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Search from './components/search';
import Category from './components/category';
import Event from './components/event';
import Venue from './components/venue';

export default (

	<Route path="/" component={App}>
		<IndexRoute component={Search} />
			<Route path="/category/:category" component={Category} />
		<Route path="event/:event" component={Event} />
		<Route path="category/:venue" component={Venue} />
	</Route>

)