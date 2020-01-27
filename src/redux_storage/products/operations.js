import actions from "./actions";
import getVegetables from "../../_database/api";

const fetchProducts = async () => {
    const results = await getVegetables();
    if (results.status === 'OK')
        return results.data
    else return []
};

export const getProducts = () =>
    async (dispatch) => {
        const products = await fetchProducts();
        products.map(p => dispatch(actions.add(p)))
    };

export const addProduct = item =>
    async (dispatch) => {
        await dispatch(actions.add(item));
    };

export const editProduct = item =>
    async (dispatch) => {
        await dispatch(actions.edit(item))
    }

export const deleteProduct = id =>
    async (dispatch) => {
        await dispatch(actions.del(id))
    }