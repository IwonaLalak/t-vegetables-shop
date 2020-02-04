import types from './types'

const INITIAL = {
    arr: [
        {
            id: 2,
            url:'https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/potatoes.png',
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
            if (!Boolean(state.arr.find(i => i.id === action.item.id)))
                return {...state, arr: [...state.arr, action.item]}
            else
                return state
        }
        case types.REMOVE_FROM_BASKET: {
            let arr = Array.from(state.arr);
            arr.splice(arr.indexOf(arr.find(i => i.id === action.id)), 1);
            return {arr}
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