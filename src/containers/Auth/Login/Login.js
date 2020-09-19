import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = (props) => {
	return (
		 <Form className="Login">
		  <h1>Login</h1>	
	      <FormGroup>
	        <Label for="userName" hidden>Email</Label>
	        <Input type="text" name="userName" id="userName" placeholder="User Name" />
	      </FormGroup>
	      {' '}
	      <FormGroup>
	        <Label for="password" hidden>Password</Label>
	        <Input type="password" name="password" id="password" placeholder="Password" />
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