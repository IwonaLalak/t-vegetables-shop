import React from 'react';
import {FormControl, FormLabel} from "react-bootstrap";

const Formselect = ({keyname, label, options, formik: {touched, errors, values, getFieldProps, handleChange, handleBlur}}) => {


    const children = () => (
        options.map(option =>
            <option selected={values.per === option.value}
                    value={option.value}>
                {option.label}
            </option>
        ))

    return (
        <>
            <FormLabel htmlFor={keyname}>
                <span>{label}</span>
                <span className={'err'}>
                {(touched[keyname] && errors[keyname]) && errors[keyname]}
                </span>
            </FormLabel>
            <FormControl as={'select'}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values[keyname]}
                         name={keyname}
                         id={keyname}
                         className={(touched[keyname] && errors[keyname]) && 'inp-err'}
                         {...getFieldProps(keyname)}
                         children={children()}
            />
        </>
    )
};

export default Formselect;