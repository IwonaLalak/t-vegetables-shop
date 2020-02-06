import types from './types'

const INITIAL = {
    obj: null
};

const orderReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case types.SET_ORDER: {
            console.log(action)
            return {obj: action.obj}
        }
        default:
            return state
    }
};

export default orderReducer;