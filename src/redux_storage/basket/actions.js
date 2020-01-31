import types from './types'

const add = item => ({
    type: types.ADD_TO_BASKET, item
});

const remove = id => ({
    type: types.REMOVE_FROM_BASKET, id
});

const changeQuantity = (id, quantity) => ({
    type: types.CHANGE_QUANTITY_IN_BASKET, id, quantity
});

export default {add, remove, changeQuantity}