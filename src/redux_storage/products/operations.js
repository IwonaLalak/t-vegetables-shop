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
        console.log(dispatch)
        const products = await fetchProducts();
        console.log(products)
        products.map(p => dispatch(actions.add(p)))
    };