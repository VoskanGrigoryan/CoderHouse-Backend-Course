import * as api from '../api';

export const createProd = (product) => async (dispatch) => {
    try {
        const { data } = await api.createProd(product);
        dispatch({ type: 'CREATE_PRODUCT', payload: data });
    } catch (error) {
        console.dir(error);
        // console.log(error);
    }
};

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.getProducts();

        dispatch({ type: 'GET_PRODUCTS', payload: data });
    } catch (error) {
        console.dir(error);
    }
};

export const updateProduct = () => async (dispatch) => {
    try {
        const { data } = await api.updateProduct();

        dispatch({ type: 'UPDATE_PRODUCT', payload: data });
    } catch (error) {
        console.log({ error });
    }
};

// export const deleteProduct = () => async (dispatch) => {
//     try {
//         const { data } = await api.deleteProduct();

//         dispatch({ type: 'DELETE_PRODUCT', payload: data });
//     } catch (error) {
//         console.log({ error });
//     }
// };
