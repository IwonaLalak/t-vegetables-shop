import React from 'react';
import {Formik} from "formik";
import {Form, FormGroup} from "react-bootstrap";
import Formfield from "../../../../shared/Forms/Formfield";
import {Times} from "../../../../_utilities/icons/FontAwesome";

const ProductSearchInput = (props) => {

    const onSubmit = (values, actions) => {
        props.handleSubmit(values)
    }

    const onClickClose = () => {
        props.handleClickClose();
    }

    return (
        <>
            <span className={'btn-close'} onClick={onClickClose}><Times/> close</span>
            <Formik
                initialValues={{search: props.searchValue}}
                enableReinitialize={true}
                onSubmit={onSubmit}
            >
                {
                    formik => (
                        <Form onSubmit={formik.handleSubmit}>
                            <FormGroup>
                                <Formfield keyname={'search'} type={'text'}
                                           label={Boolean(props.searchValue) ? 'Clear the form and press ENTER to reset' : 'Type anything and press ENTER to search table'}
                                           formik={formik}/>
                            </FormGroup>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
};

export default ProductSearchInput;