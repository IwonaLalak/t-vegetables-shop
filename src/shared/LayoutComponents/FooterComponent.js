import React from 'react';
import {Container, Row, Col} from "react-bootstrap";


const FooterComponent = () => {
    return (
        <div id={'FooterComponent'}>
            <Container>
                <Row>
                    <Col xs={12}>
                        test project to train react redux and formik | created by <a href={'https://iwonalalak.pl'}>Iwona Lalak</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent;