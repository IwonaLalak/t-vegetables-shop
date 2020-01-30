import * as Yup from "yup";

export const urlSchema = () => {
    return Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(150, 'Must be less than 50 characters')
        .required('You need fill url')
        .url('Please type a valid url')
    // .matches(/^(?i)\.(jpg|png|gif|jpeg)$/, 'Must contain file with jpg / jpeg / png / gif extension')
};

export const nameSchema = () => {
    return Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be less than 50 characters')
        .required('You need fill name')
};

export const priceSchema = () => {
    return Yup.string()
        .matches(/^[0-9]+(\.[0-9]{1,2})?$/, 'Must be digit with two decimal places, greather than 0')
        .required('You need fill price')
};

export const quantitySchema = () => {
    return Yup.number()
        .min(0, 'Must be equal or bigger than 0')
        .max(1000, 'Max 1000')
        .required('You need to fill quantity')
};

export const formVegetableSchema = () => {
    return Yup.object().shape({
        name: nameSchema(),
        url: urlSchema(),
        price: priceSchema()
    });
};

export const formBuySchema = () => {
    return Yup.object().shape({
        quantity: quantitySchema()
    });
};