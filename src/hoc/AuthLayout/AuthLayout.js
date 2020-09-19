import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import './AuthLayout.css';

const AuthLayout = (props) => {
	return (
		<>
		<Container fluid>
			<Row className="align-items-center">
				<Col sm={6} className="d-none d-sm-block leftSection">
				</Col>
				<Col sm={6} xs={12} className="rightSection">
					{props.children}
				</Col>
			</Row>
		</Container>
		</>
	) 
}

export default AuthLayout;
