import React from 'react';
import {Formik} from "formik";
import {Form, FormControl} from "react-bootstrap";
import {ActionButton} from "../../../../shared/Buttons/Buttons";
import {Cart, Minus, Plus} from "../../../../_utilities/icons/FontAwesome";
import {quantitySchema} from "../../../../_utilities/validators/YupValidators";

function BuyForm({quantity, handleChange, handleDecrease, handleIncrease, handleClickBuy}) {

    const onSubmit = (values, actions) => {
        handleChange({values})
    }

    const formBuySchema = quantitySchema();

    return (
        <div>
            <Formik
                initialValues={{quantity}}
                enableReinitialize={true}
                validationSchema={formBuySchema}
                onSubmit={onSubmit}
            >
                {
                    formik => (
                        <Form
                            inline={true}
                            onSubmit={formik.handleSubmit}
                        >
                            <ActionButton icon={<Minus/>} type={'button'} theme={'primary'}
                                          onClick={() => handleDecrease()}/>
                            <FormControl
                                type={'number'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.quantity}
                                name={'quantity'}
                                id={'quantity'}
                                className={(formik.touched.quantity && formik.errors.quantity) && 'inp-err'}
                                {...formik.getFieldProps('quantity')}
                            />
                            <ActionButton icon={<Plus/>} type={'button'} theme={'primary'}
                                          onClick={() => handleIncrease()}/>
                            <ActionButton theme={'secondary'} type={'button'} text={'Buy'} icon={<Cart/>}
                                          onClick={() => handleClickBuy}
                            />
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default BuyForm;