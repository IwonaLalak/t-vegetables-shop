import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const WrapperComponent = ({children}) => {
    return (
        <div id={'WrapperComponent'}>
            <Container>
                <Row>
                    <Col xs={12}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WrapperComponent;