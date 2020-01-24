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
            product: this.props.product,
            url: null
        }
    }

/*    componentWillReceiveProps(nextProps, nextContext) {
        console.log('will receive',nextProps)
        this.setState({
            product:nextProps.product
        })
    }*/

    /*componentDidMount() {
        console.log('mount')
        console.log(this.props)
        if(Boolean(this.props.productToEdit)){
            console.log('set product')
            this.setState({
                product:this.props.productToEdit
            })
        }
    }*/

    static getDerivedStateFromProps(props,currentState){
        console.log('derived')
        console.log(props,currentState)
        if(currentState.product !== props.product){
            console.log('retur product')
            return{
                product:props.product
            }
        }
        else return null;
    }

    /*componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('update')
        console.log(prevProps,prevState)
    }*/

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
                <button type={'button'} onClick={()=>console.log(this.state)}>state</button>
                <FormControl value={product.name} />
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
                                            <Formfield keyname={'url'} type={'url'} label={'URL path to image'}
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