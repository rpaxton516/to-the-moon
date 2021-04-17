import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Template from '../containers/Template';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

const createRoutes = () => {
	return(
		<Router path={'/'} component={Template}>
			<IndexRoute component={Home}/>
			<Route path={'/profile'} component={Profile}/>
		</Router>
		)
}

const Routes = createRoutes();

export default Routes;