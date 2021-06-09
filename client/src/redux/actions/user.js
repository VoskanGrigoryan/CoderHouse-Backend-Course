import * as api from '../api';

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.registerUser(user);
        dispatch({ type: 'REGISTER_USER', payload: data });
    } catch (error) {
        console.dir(error);
        console.log(error);
    }
};

export const loginUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(user);
        console.log(data);

        dispatch({ type: 'LOGIN_USER', payload: data });
    } catch (error) {
        console.log('Error finding a user: ', error.message);
    }
};

export const loginFacebook = (fbUser) => async (dispatch) => {
    try {
        const { data } = await api.loginFB(fbUser);

        dispatch({ type: 'GET_USER_DATA_FB', payload: data });
    } catch (error) {
        console.dir(error);
    }
};
