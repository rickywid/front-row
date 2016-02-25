import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Search from './components/search';

export default (

	<Route path="/" component={App}>
		<IndexRoute component={Search} />
	</Route>

)