import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Search from './components/search';
import Category from './components/categoryResults';
import Event from './components/event';
import Index from './components/index';

export default (

	<Route path="/" component={App}>
		<IndexRoute component={Index} />
		<Route path="/category/:category_name" component={Category} />
		<Route path="/search" component={Search} />
		<Route path="/event/:event" component={Event} />

	</Route>

)