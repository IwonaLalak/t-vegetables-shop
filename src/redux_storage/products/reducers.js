import types from './types'

const INITIAL = {
    arr: []
}

const productsReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT:
            return {
                ...state, arr: [...state.arr, action.item]
            };
        case types.EDIT_PRODUCT: {
            //impl
            console.log('edit product')
            return state
        }
        case types.DELETE_PRODUCT: {
            //impl
            console.log('delete product')
            return state
        }
        default:
            return state
    }
};

export default productsReducer