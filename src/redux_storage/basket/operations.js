import actions from "./actions";

export const addToBasket = item =>
    async (dispatch) => {
        await dispatch(actions.add(item))
    };

export const removeFromBasket = id =>
    async (dispatch) => {
        await dispatch(actions.remove(id))
    };

export const changeQuantity = (id, quantity) =>
    async (dispatch) => {
        await dispatch(actions.changeQuantity(id, quantity))
    };

export const resetBasket = () =>
    async (dispatch) => {
        await dispatch(actions.reset())
    };