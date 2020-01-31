import types from './types'

const INITIAL = {
    arr: []
};

const basketReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case types.ADD_TO_BASKET: {
            // impl add
            return state
        }
        case types.REMOVE_FROM_BASKET: {
            // impl remove
            return state
        }
        case types.CHANGE_QUANTITY_IN_BASKET: {
            // impl change quantity
            return state
        }
        default:
            return state;
    }
};

export default basketReducer