import axios from 'axios';

const loginFBUrl = 'http://localhost:4000/auth/facebook/callback';

export const loginFB = (userFB) => axios.post(loginFBUrl, userFB);
