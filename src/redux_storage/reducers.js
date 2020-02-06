import {combineReducers} from 'redux'
import productsReducer from "./products";
import basketReducer from "./basket";
import orderReducer from "./order";

const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer,
    order: orderReducer
});

export default rootReducer