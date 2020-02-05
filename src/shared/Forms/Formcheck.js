import React from 'react';
import {Form} from "react-bootstrap";

const Formcheck = ({keyname, label, formik: {touched, errors, values, getFieldProps, handleChange, handleBlur}}) => {
    return (
        <>
            <Form.Check type={'checkbox'}
                        name={keyname}
                        label={label}
                        id={keyname}
                        value={values[keyname]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={(touched[keyname] && errors[keyname]) && 'inp-err'}
                        {...getFieldProps(keyname)}

            />
            <div className={'err'}>
                {(touched[keyname] && errors[keyname]) && errors[keyname]}
            </div>
        </>
    );
};

export default Formcheck;