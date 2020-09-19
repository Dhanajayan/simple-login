import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeComponent from './containers/Home/Home'; 
import LogoutComponent from './containers/Auth/Logout/Logout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LoginComponent from './containers/Auth/Login/Login';
import SignupComponent from './containers/Auth/Signup/Signup';
import AuthLayout from './hoc/AuthLayout/AuthLayout';
import AppLayout from './hoc/AppLayout/AppLayout';
import * as actions from './store/actions/index';

import './App.css';

const App = (props) => {

	const isAuthenticated = useSelector(state => state.auth.token !== null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch( actions.authCheckState() )
	}, []);

	let routes = (
		<AuthLayout>
			<Switch>
				<Route path="/login" component={LoginComponent} />
				<Route path="/signup" component={SignupComponent} />
				<Route path="/" exact component={LoginComponent} />
				<Redirect to="/" />
			</Switch>
		</AuthLayout>
		);
	if(isAuthenticated) {
	    routes = (
      	 <AppLayout>
	        <Switch>
	            <Route path="/home" component={HomeComponent}/>
	            <Route path="/logout" component={LogoutComponent}/>
				<Route path="/" exact component={HomeComponent} />
		        <Redirect to="/" />
	        </Switch>
         </AppLayout>
       );
	}
	  return (
	    <div className="App">
	    	{routes}
	    </div>
	  );
}

export default withRouter(App);
