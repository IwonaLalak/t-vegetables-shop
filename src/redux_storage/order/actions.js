import types from './types'

const set = obj => ({
    type: types.SET_ORDER, obj
});
const reset = () => ({
    type: types.RESET_ORDER,
});

export default {set, reset}