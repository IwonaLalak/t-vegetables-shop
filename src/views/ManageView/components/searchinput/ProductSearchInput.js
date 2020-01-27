import React from 'react';
import {Formik} from "formik";
import {Form, FormGroup} from "react-bootstrap";
import Formfield from "../../../../shared/Forms/Formfield";
import {Times} from "../../../../_utilities/icons/FontAwesome";

const ProductSearchInput = (props) => {

    const onSubmit = (values, actions) => {
        console.log(values, actions)
    }

    const onClickClose = () => {
        props.handleClickClose();
    }

    return (
        <>
            <span className={'btn-close'} onClick={onClickClose}><Times/> close</span>
            <Formik
                initialValues={{search: ''}}
                enableReinitialize={true}
                onSubmit={onSubmit}
            >
                {
                    formik => (
                        <Form onSubmit={formik.handleSubmit}>
                            <FormGroup>
                                <Formfield keyname={'search'} type={'text'}
                                           label={'Type anything and press ENTER to search table'} formik={formik}/>
                            </FormGroup>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
};

export default ProductSearchInput;