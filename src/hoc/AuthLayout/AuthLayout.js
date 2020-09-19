import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import './AuthLayout.css';

const AuthLayout = (props) => {
	return (
		<>
		<Container fluid>
			<Row>
			<Col md={6} xs={12}>
				<div className="leftSection">
					
				</div>
			</Col>
			<Col md={6} xs={12}>
				{props.children}
			</Col>
			</Row>
			</Container>
		</>
	) 
}

export default AuthLayout;
