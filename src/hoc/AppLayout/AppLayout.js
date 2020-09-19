import React from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';

const AppLayout = (props) => {
	return(
	  <>
	      <Navbar color="light" light expand="md">
	        <NavbarBrand href="/">Home</NavbarBrand>
	         <NavbarText>Logout</NavbarText>
	      </Navbar>
	      {props.children}
      </>
	)
}

export default AppLayout;
