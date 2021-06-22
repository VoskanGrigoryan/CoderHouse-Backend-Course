import axios from 'axios';

const registerUserUrl = 'http://localhost:4000/user/register';
const loginUserUrl = 'http://localhost:4000/user/login';
const loginFBUrl = 'http://localhost:4000/auth/facebook/callback';

//Products
const createProdUrl = 'http://localhost:4000/new-product';
const getProdsUrl = 'http://localhost:4000/products';

export const registerUser = (user) => axios.post(registerUserUrl, user);
export const loginUser = (user) => axios.post(loginUserUrl, user);
export const loginFB = (userFB) => axios.post(loginFBUrl, userFB);

//products
export const createProd = (product) => axios.post(createProdUrl, product);
export const getProducts = () => axios.get(getProdsUrl);
