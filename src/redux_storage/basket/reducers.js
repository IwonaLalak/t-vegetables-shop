import types from './types'

const INITIAL = {
    arr: [
        {
            id: 2,
            name: 'Potatoes',
            per: 'kg',
            price: 1.89,
            quantity: 3
        }
    ]
};

const basketReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case types.ADD_TO_BASKET: {
            console.log("impl add")
            return state
        }
        case types.REMOVE_FROM_BASKET: {
            console.log("impl remove")
            return state
        }
        case types.CHANGE_QUANTITY_IN_BASKET: {

            let arr = state.arr;
            let obj = arr[state.arr.indexOf(state.arr.find(i => i.id === action.id))];
            if (Boolean(obj)) {
                obj.quantity = action.quantity;
            }
            return {arr}
        }
        default:
            return state;
    }
};

export default basketReducer