import React, { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeComponent from './containers/Home/Home'; 
import LogoutComponent from './containers/Auth/Logout/Logout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import AuthLayout from './hoc/AuthLayout/AuthLayout';
import AppLayout from './hoc/AppLayout/AppLayout';
import * as actions from './store/actions/index';
import Spinner from './components/Spinner/Spinner';
import './App.css';

const LoginComponent = lazy(() => import('./containers/Auth/Login/Login'));
const SignupComponent = lazy(() => import('./containers/Auth/Signup/Signup'));


const App = (props) => {

	const isAuthenticated = useSelector(state => state.auth.token !== null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch( actions.authCheckState() )
	}, []);

	let routes = (
		<AuthLayout data-test="component-layout">
			<Suspense fallback={<Spinner />}>
				<Switch>
					<Route path="/login" component={LoginComponent} />
					<Route path="/signup" component={SignupComponent} />
					<Route path="/" exact component={LoginComponent} />
					<Redirect to="/" />
				</Switch>
			</Suspense>
		</AuthLayout>
		);
	if(isAuthenticated) {
	    routes = (
      	 <AppLayout data-test="component-layout">
			<Suspense fallback={<Spinner />}>
		        <Switch>
		            <Route path="/home" component={HomeComponent}/>
		            <Route path="/logout" component={LogoutComponent}/>
					<Route path="/" exact component={HomeComponent} />
			        <Redirect to="/" />
		        </Switch>
			</Suspense>
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
