import types from './types'

const add = item => ({
    type: types.ADD_PRODUCT, item
});

const edit = item => ({
    type: types.EDIT_PRODUCT, item
});

const del = item => ({
    type: types.DELETE_PRODUCT, item
});

export default {add, edit, del}