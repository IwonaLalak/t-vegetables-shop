import React from 'react';
import {FormControl, FormLabel} from "react-bootstrap";

const Formfield = ({keyname, label, type, formik: {touched, errors, values, getFieldProps, handleChange, handleBlur}}) => {

    return (
        <>
            <FormLabel htmlFor={keyname}>
                <span>{label}</span>
                <span className={'err'}>
                {(touched[keyname] && errors[keyname]) && errors[keyname]}
                </span>
            </FormLabel>
            <FormControl type={type}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values[keyname]}
                         name={keyname}
                         id={keyname}
                         className={(touched[keyname] && errors[keyname]) && 'inp-err'}
                         {...getFieldProps(keyname)}
            />
        </>
    )
};

export default Formfield;