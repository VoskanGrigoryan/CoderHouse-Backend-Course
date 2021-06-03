import * as api from '../api';

export const loginFacebook = (fbUser) => async (dispatch) => {
    try {
        const { data } = await api.loginFB(fbUser);

        dispatch({ type: 'GET_USER_DATA_FB', payload: data });
    } catch (error) {
        console.dir(error);
    }
};
