import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import * as actions from '../../../store/actions/index';

const Login = (props) => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
    const error = useSelector(state => state.auth.error);
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		console.log("Submit handler", e);
		e.preventDefault();
		dispatch(actions.auth({
			userName, password
		}, true));
	}

	return (
		 <Form className="Login" onSubmit={(e) => submitHandler(e)}>
		   {error}
		  <h1>Login</h1>	
	      <FormGroup>
	        <Label for="userName" hidden>Email</Label>
	        <Input type="text" 
	        	data-test="component-field"
	        	name="userName"
	        	id="userName"
	        	placeholder="User Name"
	        	value={userName}
	        	onChange={(e) => setUserName(e.target.value)}
	        	required/>
	      </FormGroup>
	      {' '}
	      <FormGroup>
	        <Label for="password" hidden>Password</Label>
	        <Input type="password"
		         data-test="component-field"
	        	 name="password"
	        	 id="password"
	        	 placeholder="Password"
	        	 value={password}
	        	 onChange={(e) => setPassword(e.target.value)}
	        	 required/>
	      </FormGroup>
	      {' '}
	      <Button size="sm">Login</Button>
	      <Link to="/signup">
		      <Button type="button" color="link" size="sm">Sign up</Button>
	      </Link>
	    </Form>
	)
}

export default Login;