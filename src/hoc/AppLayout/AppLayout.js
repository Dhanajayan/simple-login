import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarText, Button } from 'reactstrap';

const AppLayout = (props) => {
	return(
	  <>
	      <Navbar color="light" light expand="md">
	        <NavbarBrand href="/">Home</NavbarBrand>
	         <NavbarText>
		         <Button color="link">
			         <Link to="/logout">Logout</Link>
		        </Button>
	         </NavbarText>
	      </Navbar>
	      {props.children}
      </>
	)
}

export default AppLayout;
