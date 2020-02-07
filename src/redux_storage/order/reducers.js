import types from './types'

const INITIAL = {
    obj: null
};

const orderReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case types.SET_ORDER:
            return {obj: action.obj};
        case types.RESET_ORDER:
            return {obj: null};
        default:
            return state
    }
};

export default orderReducer;