import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
import * as actions from '../../../store/actions/index';


const Signup = (props) => {
	const dispatch = useDispatch();
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [gender, setGender] = useState('');
	const [country, setCountry] = useState('');
    const error = useSelector(state => state.auth.error);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(actions.auth({userName, password, email, firstName, lastName, gender, country}, false));
	}

	return (
		 <Form className="Signup" onSubmit={(e) => submitHandler(e)}>
		 {error}
		  <h1>Sign up</h1>	
	      <FormGroup>
	        <Label for="userName" hidden>Email</Label>
	        <Input type="text"
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
	        	 name="password"
	        	 id="password"
	        	 placeholder="Password"
	        	 value={password}
	        	 onChange={(e) => setPassword(e.target.value)}
	        	 required/>
	      </FormGroup>
	      {' '}
	      {' '}
  	      <FormGroup>
	        <Label for="email" hidden>Email</Label>
	        <Input type="email"
	        	 name="email"
	        	 id="email"
	        	 placeholder="Email"
	        	 value={email}
	        	 onChange={(e) => setEmail(e.target.value)}
	        	 required/>
	      </FormGroup>
	      {' '}
  	      <FormGroup>
	        <Label for="firstName" hidden>Email</Label>
	        <Input type="text"
	        	 name="firstName"
	        	 id="firstName"
	        	 placeholder="First Name"
	        	 value={firstName}
	        	 onChange={(e) => setFirstName(e.target.value)}
	        	 required />
	      </FormGroup>
	      {' '}
  	      <FormGroup>
	        <Label for="lastName" hidden>Email</Label>
	        <Input type="text"
	        	 name="lastName"
	        	 id="lastName"
	        	 placeholder="Last Name"
	        	 value={lastName}
	        	 onChange={(e) => setLastName(e.target.value)} 
	        	 required/>
	      </FormGroup>
	      {' '}
	      <FormGroup tag="fieldset" inline onChange={(e) => setGender(e.target.value)}>
	        <legend className="col-form-label">Gender</legend>
	          <FormGroup check inline>
	            <Label check>
	              <Input type="radio" name="gender" value="male" required/>{' '}
	              Male
	            </Label>
	          </FormGroup>
	          <FormGroup check inline>
	            <Label check>
	              <Input type="radio" name="gender" value="female" required/>{' '}
	              Female
	            </Label>
	          </FormGroup>
	          <FormGroup check inline>
	            <Label check>
	              <Input type="radio" name="gender" value="other" required/>{' '}
	              Other
	            </Label>
	          </FormGroup>
	      </FormGroup>
	       <FormGroup>
	        <Label for="country">Select</Label>
	        <Input type="select"
	        	 name="country"
	        	 id="country"
	        	 value={country}
	        	 onChange={(e) => setCountry(e.target.value)}
	        	 required>
	          <option value="India">India</option>
	          <option value="USA">USA</option>
	          <option value="Sri Lanka">Sri Lanka</option>
	          <option value="South Africa">South Africa</option>
	          <option value="Pakistan">Pakistan</option>
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