import axios from 'axios';

const localhost = 'http://localhost:4000';

const registerUserUrl = 'http://localhost:4000/user/register';
const loginUserUrl = 'http://localhost:4000/user/login';
const loginFBUrl = 'http://localhost:4000/auth/facebook/callback';

//Products
const createProdUrl = localhost + '/new-product';
const getProductsUrl = localhost + '/get-products';
const updateProductUrl = localhost + '/update-product';
// const deleteProductUrl = localhost + '/delete-product';

export const registerUser = (user) => axios.post(registerUserUrl, user);
export const loginUser = (user) => axios.post(loginUserUrl, user);
export const loginFB = (userFB) => axios.post(loginFBUrl, userFB);

//products
export const createProd = (product) => axios.post(createProdUrl, product);
export const getProducts = () => axios.get(getProductsUrl);
export const updateProduct = (product) => axios.put(updateProductUrl, product);
// export const deleteProduct = (product) =>
//     axios.delete(deleteProductUrl, product);
