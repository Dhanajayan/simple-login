import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = (props) => {
	return (
		 <Form className="Signup">
		  <h1>Sign up</h1>	
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
	      {' '}
  	      <FormGroup>
	        <Label for="email" hidden>Email</Label>
	        <Input type="email" name="email" id="email" placeholder="Email" />
	      </FormGroup>
	      {' '}
  	      <FormGroup>
	        <Label for="firstName" hidden>Email</Label>
	        <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
	      </FormGroup>
	      {' '}
  	      <FormGroup>
	        <Label for="lastName" hidden>Email</Label>
	        <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
	      </FormGroup>
	      {' '}
	      <FormGroup tag="fieldset" inline>
	        <legend className="col-form-label">Gender</legend>
	          <FormGroup check inline>
	            <Label check>
	              <Input type="radio" name="radio" />{' '}
	              Male
	            </Label>
	          </FormGroup>
	          <FormGroup check inline>
	            <Label check>
	              <Input type="radio" name="radio" />{' '}
	              Female
	            </Label>
	          </FormGroup>
	          <FormGroup check inline>
	            <Label check>
	              <Input type="radio" name="radio" />{' '}
	              Other
	            </Label>
	          </FormGroup>
	      </FormGroup>
	       <FormGroup>
	        <Label for="country">Select</Label>
	        <Input type="select" name="country" id="country">
	          <option>India</option>
	          <option>USA</option>
	          <option>Sri Lanka</option>
	          <option>South Africa</option>
	          <option>Pakistan</option>
	        </Input>
	      </FormGroup>
	      <Button size="sm">Sign up</Button>
	      <Link to="/login">
		      <Button type="button" color="link" size="sm">Login</Button>
	      </Link>
	    </Form>
	)
}

export default Signup;