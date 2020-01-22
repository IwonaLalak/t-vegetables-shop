import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const WrapperComponent = ({children}) => {
    return (
        <div id={'WrapperComponent'}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Breadcrumbs/>
                    </Col>
                    <Col xs={12}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WrapperComponent;