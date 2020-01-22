import React, {Component} from 'react';
import {Formik} from "formik";
import {Col, Form, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import {ActionButton, SaveCancelButtonGroup} from "../../../../shared/Buttons/Buttons";
import {Save} from "../../../../_utilities/icons/FontAwesome";
import * as Yup from 'yup';

class ProductForm extends Component {

    state = {
        product: {name: '', url: '', price: '', per: 'stuck'}
    }

    onSubmit = (values, actions) => {
        console.log(values, actions)
    };

    render() {
        let {product} = this.state;

        const validationSchema = Yup.object().shape({
            name: Yup.string()
                .min(3, 'Must be at least 3 characters')
                .max(50, 'Must be less than 50 characters')
                .required('You need fill name'),
            url: Yup.string()
                .min(3, 'Must be at least 3 characters')
                .max(50, 'Must be less than 50 characters')
                .required('You need fill url')
                .url('Please type a valid url'),
            price: Yup.string()
                .matches(/^[0-9]+(\.[0-9]{1,2})?$/, 'Must be digit with two decimal places, greather than 0')
                .required('You need fill price')

        });

        return (
            <div>
                <Formik
                    initialValues={product}
                    validationSchema={validationSchema}
                    onSubmit={this.onSubmit}
                >
                    {
                        props => (
                            <Form
                                onSubmit={props.handleSubmit}
                            >
                                <Row>
                                    <Col lg={3}>
                                        <FormGroup>
                                            image
                                        </FormGroup>
                                    </Col>
                                    <Col lg={9}>
                                        <FormGroup>
                                            <FormLabel htmlFor={'name'}>
                                                <span>Vegetable name</span>
                                                <span className={'err'}>
                                                        {
                                                            (props.touched.name && props.errors.name) && props.errors.name
                                                        }
                                                    </span>
                                            </FormLabel>
                                            <FormControl type={'text'}
                                                         onChange={props.handleChange}
                                                         onBlur={props.handleBlur}
                                                         value={props.values.name}
                                                         name={'name'}
                                                         id={'name'}
                                                         className={(props.touched.name && props.errors.name) && 'inp-err'}
                                                         {...props.getFieldProps('name')}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col xs={6}>
                                                    <FormLabel htmlFor={'price'}>
                                                        <span>Vegetable price</span>
                                                        <span className={'err'}>
                                                        {
                                                            (props.touched.price && props.errors.price) && props.errors.price
                                                        }
                                                    </span>
                                                    </FormLabel>
                                                    <FormControl type={'number'}
                                                                 onChange={props.handleChange}
                                                                 onBlur={props.handleBlur}
                                                                 value={props.values.price}
                                                                 name={'price'}
                                                                 id={'price'}
                                                                 className={(props.touched.price && props.errors.price) && 'inp-err'}
                                                                 {...props.getFieldProps('price')}
                                                    />
                                                </Col>
                                                <Col xs={6}>
                                                    <FormLabel htmlFor={'per'}>
                                                        <span>Price per</span>
                                                    </FormLabel>
                                                    <Form.Control as={'select'}
                                                                  onChange={props.handleChange}
                                                                  onBlur={props.handleBlur}
                                                                  name={'per'}
                                                                  id={'per'}
                                                    >
                                                        <option selected={props.values.per === 'kg'}
                                                                value={'kg'}>kg
                                                        </option>
                                                        <option selected={props.values.per === 'stuck'}
                                                                value={'stuck'}>stuck
                                                        </option>
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <FormLabel htmlFor={'url'}>
                                                <span>Image url</span>
                                                <span className={'err'}>
                                                        {
                                                            (props.touched.url && props.errors.url) && props.errors.url
                                                        }
                                                    </span>
                                            </FormLabel>
                                            <FormControl type={'url'}
                                                         onChange={props.handleChange}
                                                         onBlur={props.handleBlur}
                                                         value={props.values.url}
                                                         name={'url'}
                                                         id={'url'}
                                                         className={(props.touched.url && props.errors.url) && 'inp-err'}
                                                         {...props.getFieldProps('url')}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <div className={'float-right'}>
                                            <SaveCancelButtonGroup
                                                onClickCancel={()=>this.props.handleCancel()}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        );
    }
}

export default ProductForm;