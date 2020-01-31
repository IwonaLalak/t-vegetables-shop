import types from './types'
import {generateNextId} from "../../_utilities/iterators/IdsIterator";

const INITIAL = {
    arr: []
}

const productsReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT:

            if (action.item.id !== null && action.item.id !== undefined) {
                return {
                    ...state, arr: [...state.arr, action.item]
                };
            } else {
                return {
                    ...state, arr: [...state.arr, Object.assign(action.item, {id: generateNextId(state.arr)})]
                };
            }
        case types.EDIT_PRODUCT: {
            let arr = state.arr;
            arr[state.arr.indexOf(state.arr.find(i => i.id === action.item.id))] = action.item;
            return {arr}
        }
        case types.DELETE_PRODUCT: {
            let arr = state.arr;
            arr.splice(arr.indexOf(arr.find(i => i.id === action.id)), 1);
            return {arr}
        }
        default:
            return state
    }
};

export default productsReducer