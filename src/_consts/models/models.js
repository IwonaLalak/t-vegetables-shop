export const productModel = () => {
    return {name: '', url: '', price: '', per: 'kg'};
};

export const orderModel = () => {
    return {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        place: '',
        postcode: '',
        street: '',
        building: '',
        flat: '',
        agreement:false
    }
};