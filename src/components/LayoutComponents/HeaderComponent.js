import React from 'react';
import {Nav, Navbar, Container, Row, Col} from "react-bootstrap";
import {Basket, Home, Panel} from "../../_utilities/icons/FontAwesome";


const HeaderComponent = (props) => {


    return (

        <div id={'HeaderComponent'}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Navbar expand={'md'}>
                            <Navbar.Brand>vegetables!</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                <Nav className="mr-right">
                                    <Nav.Link><Home/> Home</Nav.Link>
                                    <Nav.Link><Basket/> Basket</Nav.Link>
                                    <Nav.Link><Panel/> Panel</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>

    )

}

export default HeaderComponent;