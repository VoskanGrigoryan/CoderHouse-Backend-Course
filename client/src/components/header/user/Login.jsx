import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { loginFacebook } from '../../../redux/actions/user';
import { loginUser } from '../../../redux/actions/user';
import { Input, Button } from 'antd';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [userData, setUserData] = useState({
        userName: '',
        password: '',
    });
    const { userName, password } = userData;

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser(userData));

        history.push('/');
    };

    const responseFacebook = (response) => {
        let now = new Date();

        console.log(response);
        console.log('Created at: ' + now);
        dispatch(loginFacebook(response));
        history.push('/');
    };
    return (
        <div
            style={{ paddingTop: '80px', paddingLeft: '30px', paddingRight: '30px' }}
            className="d-flex justify-content-center row mx-0"
        >
            <form onSubmit={handleSubmit} className="border rounded bg-light p-3 w-25">
                <h2 className="text-center">Login</h2>
                <label className="mt-0">Your name</label>
                <Input
                    onChange={handleChange}
                    value={userName}
                    name="userName"
                    type="text"
                    placeholder="Your first and last name"
                    autoComplete="off"
                />

                <label>Password</label>
                <Input
                    type="password"
                    onChange={handleChange}
                    value={password}
                    name="password"
                    placeholder="Write down your password"
                />

                <Button
                    variant="contained"
                    type="submit"
                    className="w-100 mt-4"
                    onClick={handleSubmit}
                >
                    Login
                </Button>

                <p className="mt-2">
                    Don't have an account? Click <Link to="/register">here</Link>
                </p>
            </form>
            <div className="text-center mt-4">
                <FacebookLogin
                    appId="309747883964855"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                />
            </div>
        </div>
    );
};

export default Login;
