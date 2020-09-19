import React from 'react';
import HomeComponent from './containers/Home/Home'; 
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LoginComponent from './containers/Auth/Login/Login';
import SignupComponent from './containers/Auth/Signup/Signup';
import AuthLayout from './hoc/AuthLayout/AuthLayout';
import AppLayout from './hoc/AppLayout/AppLayout';

import './App.css';

const App = (props) => {
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

    //    routes = (
    //   	 <AppLayout>
	   //      <Switch>
	   //          <Route path="/home" component={HomeComponent}/>
				// <Route path="/" exact component={HomeComponent} />
		  //       <Redirect to="/" />
	   //      </Switch>
    //      </AppLayout>
    //    );
	  return (
	    <div className="App">
	    	{routes}
	    </div>
	  );
}

export default withRouter(App);
