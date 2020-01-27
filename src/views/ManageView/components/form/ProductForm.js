import React, {Component} from 'react';
import {Formik} from "formik";
import {Col, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {SaveCancelButtonGroup} from "../../../../shared/Buttons/Buttons";
import {formVegetableSchema, urlSchema} from "../../../../_utilities/validators/YupValidators";
import Formfield from "../../../../shared/Forms/Formfield";
import {perOptions} from "../../../../_utilities/constvalues/constoptions";
import Formselect from "../../../../shared/Forms/Formselect";
import ImageField from "./ImageField";

class ProductForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: null,
            url: null
        }
    }


    componentDidMount() {
        this.setState({
            product: this.props.product
        })
    }

    static getDerivedStateFromProps(props,currentState){
        console.log('derived')
        console.log(props,currentState)
        if(currentState.product !== props.product){
            console.log('retur product')
            return{
                product:props.product,
                url:props.product.url
            }
        }
        else return null;
    }

    onSubmit = (values, actions) => {
        console.log(values, actions)
    };

    onChangeForm = ({target}) => {

        if (target.id === 'url') {
            urlSchema().isValid(target.value).then((valid => {
                this.setState({url: valid? target.value:null})
            }))

        }
    }

    render() {
        let {product, url} = this.state;

        const validationSchema = formVegetableSchema();

        return (
            <div>
                <Formik
                    initialValues={product}
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                    onSubmit={this.onSubmit}
                >
                    {
                        formik => (
                            <Form
                                onSubmit={formik.handleSubmit}
                                onChange={this.onChangeForm}
                            >
                                <Row>
                                    <Col lg={3}>
                                        <FormGroup>
                                            <ImageField url={url}/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={9}>
                                        <FormGroup>
                                            <Formfield keyname={'name'} label={'Vegetable name'} type={'text'}
                                                       formik={formik}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col xs={6}>
                                                    <Formfield keyname={'price'} label={'Vegetable price'}
                                                               type={'number'} formik={formik}/>
                                                </Col>
                                                <Col xs={6}>
                                                    <Formselect keyname={'per'}
                                                                label={'Price per'}
                                                                type={'select'}
                                                                options={perOptions()}
                                                                formik={formik}/>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Formfield keyname={'url'} label={'URL path to image'} type={'url'}
                                                       formik={formik}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <div className={'float-right'}>
                                            <SaveCancelButtonGroup
                                                onClickCancel={() => this.props.handleCancel()}
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