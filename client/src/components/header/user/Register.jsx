import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { createUser } from '../redux/actions/user';
import { createUser } from '../../../redux/actions/user';

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        userName: '',
        email: '',
        password: '',
    });
    const { userName, email, password } = userData;

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createUser(userData));

        history.push('/login');
    };

    return (
        <div
            style={{ paddingTop: '80px', paddingLeft: '30px', paddingRight: '30px' }}
            className="d-flex justify-content-center row mx-0"
        >
            <form
                onSubmit={handleSubmit}
                style={{ marginTop: '35px' }}
                className="border rounded bg-light p-3 w-25"
            >
                <h2 className="text-center">Create an account</h2>
                <label className="mt-0">Full name</label>
                <Input
                    name="userName"
                    onChange={handleChange}
                    value={userName}
                    type="text"
                    placeholder="Your first and last name"
                    autoComplete="off"
                />

                <label>Email</label>
                <Input
                    onChange={handleChange}
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Your email"
                    autoComplete="off"
                />

                <label>Create password</label>
                <Input
                    type="password"
                    onChange={handleChange}
                    value={password}
                    name="password"
                    placeholder="Write down your password"
                />
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    type="submit"
                    className="text-white w-100 mt-4"
                    style={{ backgroundColor: '#8ac4d0' }}
                >
                    Register
                </Button>

                <p className="mt-2">
                    Already have an account? Click <Link to="/login">here</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
