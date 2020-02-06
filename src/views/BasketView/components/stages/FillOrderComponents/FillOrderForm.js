import React from 'react';
import {Formik} from "formik";
import {Col, Form, FormGroup, Row} from "react-bootstrap";
import Formfield from "../../../../../shared/Forms/Formfield";
import Formcheck from "../../../../../shared/Forms/Formcheck";
import {orderSchema} from "../../../../../_utilities/validators/YupValidators";
import {ActionButton} from "../../../../../shared/Buttons/Buttons";
import {Check, Save} from "../../../../../_utilities/icons/FontAwesome";

const FillOrderForm = ({order, confirmedData, handleSubmitOrderForm, handleChangeForm}) => {

    const onSubmit = (values) => {
        handleSubmitOrderForm(values)
    };

    const validationSchema = orderSchema();

    return (
        <div>
            <Formik
                initialValues={order}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => (
                        <Form
                            onChange={handleChangeForm}
                        >
                            <Row>
                                <Col xs={12}>
                                    <h6>Personal and contact data</h6>
                                </Col>
                                <Col md={6} lg={4}>
                                    <FormGroup>
                                        <Formfield
                                            keyname={'firstname'}
                                            label={'Firstname'}
                                            type={'text'}
                                            formik={formik}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6} lg={4}>
                                    <FormGroup>
                                        <Formfield
                                            keyname={'lastname'}
                                            label={'Lastname'}
                                            type={'text'}
                                            formik={formik}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} lg={4}>
                                    <FormGroup>
                                        <Formfield
                                            keyname={'email'}
                                            label={'Email'}
                                            type={'email'}
                                            formik={formik}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6} lg={4}>
                                    <FormGroup>
                                        <Formfield
                                            keyname={'phone'}
                                            label={'Phone number'}
                                            type={'phone'}
                                            formik={formik}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <h6>Delivery address</h6>
                                </Col>
                                <Col md={6} lg={4}>
                                    <FormGroup>
                                        <Formfield
                                            keyname={'place'}
                                            label={'Place'}
                                            type={'text'}
                                            formik={formik}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3} lg={2}>
                                    <FormGroup>
                                        <Formfield
                                            keyname={'postcode'}
                                            label={'Postcode'}
                                            type={'text'}
                                            formik={formik}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} lg={4}>
                                    <FormGroup>
                                        <Formfield
                                            keyname={'street'}
                                            label={'Street'}
                                            type={'text'}
                                            formik={formik}
                                        /></FormGroup>
                                </Col>
                                <Col md={3} lg={2}>
                                    <FormGroup>
                                        <Formfield
                                            keyname={'building'}
                                            label={'No. of building'}
                                            type={'number'}
                                            formik={formik}
                                        /></FormGroup>
                                </Col>
                                <Col md={3} lg={2}>
                                    <FormGroup>
                                        <Formfield
                                            keyname={'flat'}
                                            label={'No. of flat'}
                                            type={'number'}
                                            formik={formik}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup>
                                        <Formcheck
                                            keyname={'agreement'}
                                            label={'I agree to the processing of the above data for marketing purposes during the process of handling orders in the company Vegetables!'}
                                            formik={formik}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    {
                                        Boolean(confirmedData) &&
                                        <ActionButton
                                            type={'button'}
                                            theme={'secondary'}
                                            text={confirmedData.label}
                                            icon={confirmedData.status > 0 ? <Check/> : <Save/>}
                                            disabled={confirmedData.status > 0}
                                            onClick={formik.handleSubmit}
                                        />
                                    }
                                </Col>
                            </Row>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};

export default FillOrderForm;