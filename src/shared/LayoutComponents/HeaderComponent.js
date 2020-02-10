import React from 'react';
import {Nav, Navbar, Container, Row, Col, Badge} from "react-bootstrap";
import {Basket, Home, Panel, User} from "../../_utilities/icons/FontAwesome";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


const HeaderComponent = ({basket}) => {


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
                                    <Nav.Link>
                                        <Link to={'/'}>
                                            <Home/> Home
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to={'/basket'}>
                                            <Basket/> Basket <Badge variant={'secondary'}>{basket.length}</Badge></Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to={'/login'}>
                                            <User/> Login
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to={'/manage'}>
                                            <Panel/> Panel
                                        </Link>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>

    )

}

const mapStateToProps = state => ({
    basket: state.basket.arr
});

export default connect(mapStateToProps)(HeaderComponent);