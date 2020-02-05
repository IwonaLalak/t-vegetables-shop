import * as Yup from "yup";

//let imageRegexp = new RegExp(/^(?i)\.(jpg|png|gif|jpeg)$/);
let phoneRegexp = new RegExp(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/);
let postcodeRegExp = new RegExp(/[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z][A-Z]/)


export const urlSchema = () => {
    return Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(150, 'Must be less than 50 characters')
        .required('You need fill url')
        .url('Please type a valid url')
    // .matches(imageRegexp, 'Must contain file with jpg / jpeg / png / gif extension')
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
        .min(1, 'Must be equal or bigger than 1')
        .max(1000, 'Max 1000')
        .required('You need to fill quantity')
};

export const firstnameSchema = () => {
    return Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be less than 50 characters')
        .required('You need fill firstname')
};

export const lastnameSchema = () => {
    return Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be less than 50 characters')
        .required('You need fill lastname')
};

export const emailSchema = () => {
    return Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(100, 'Must be less than 100 characters')
        .email('Email format is not valid')
        .required('You need fill email')
};

export const phoneSchema = () => {
    return Yup.string()
        .matches(phoneRegexp, 'Phone number format is not valid, should be like 000-000-000 or 000000000')
        .required('You need fill phone number')
};

export const placeSchema = () => {
    return Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be less than 50 characters')
        .required('You need fill place')
};

export const postcodeSchema = () => {
    return Yup.string()
        .matches(postcodeRegExp, 'Postcode format is not valid, accept only format for UK')
        .required('You need fill postcode')
};

export const streetSchema = () => {
    return Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be less than 50 characters')
};

export const buildingSchema = () => {
    return Yup.number()
        .min(1, 'Must be equal or bigger than 1')
        .max(10000, 'Max 10000')
        .required('You need to fill building number')
};

export const flatSchema = () => {
    return Yup.number()
        .min(1, 'Must be equal or bigger than 1')
        .max(1000, 'Max 1000')
};

export const agreementSchema = () => {
    return Yup.boolean()
        .oneOf([true], 'You need to accept terms')
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

export const orderSchema = () => {
    return Yup.object().shape({
        firstname: firstnameSchema(),
        lastname: lastnameSchema(),
        email: emailSchema(),
        phone: phoneSchema(),
        place: placeSchema(),
        postcode: postcodeSchema(),
        street: streetSchema(),
        building: buildingSchema(),
        flat: flatSchema(),
        agreement: agreementSchema()
    });
};