import React from 'react';
import {Nav, Navbar} from "react-bootstrap";


const HeaderComponent = (props) => {


    return (

        <div id={'HeaderComponent'}>
            <Navbar bg={'light'}>
                <Navbar.Brand>vegetables!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )

}

export default HeaderComponent;