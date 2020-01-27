import types from './types'

const add = item => ({
    type: types.ADD_PRODUCT, item
});

const edit = item => ({
    type: types.EDIT_PRODUCT, item
});

const del = id => ({
    type: types.DELETE_PRODUCT, id
});

export default {add, edit, del}