import types from './types'

const add = item => ({
    type: types.ADD_TO_BASKET, item
});

const remove = id => ({
    type: types.REMOVE_FROM_BASKET, id
});

const changeQuantity = item => ({
    type: types.CHANGE_QUANTITY_IN_BASKET, item
});

export default {add, remove, changeQuantity}