import actions from './actions';

export const setOrder = obj =>
    async (dispatch) => {
        await dispatch(actions.set(obj))
    };

export const resetOrder = () =>
    async (dispatch) => {
        await dispatch(actions.reset())
    };