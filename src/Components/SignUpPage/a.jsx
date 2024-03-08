this is my Signup.jsx file code

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserInfo } from '../../toolkit/slice';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Form from 'react-bootstrap/Form';
import "../SignUpPage/Signup.css";
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const Signup = () => {
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        Name: "",
        Email: "",
        Password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        dispatch(saveUserInfo(userData));
        setUserData({
            Name: "",
            Email: "",
            Password: ""
        });
        console.log(userData);
    };

    return (
        <section className='container signup-page'>
            <section>
                <div className='pt-3'>
                    <ArrowBackIosNewIcon />
                    <h1 className='mt-4 fw-bold'>Sign up</h1>
                </div>
            </section>

            <section className='form-part'>
                <div className='mt-5'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <TextField className='input-field bg-white w-100' label="Name" variant="outlined" type='text'
                                name="Name"
                                value={userData.Name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <TextField className='input-field bg-white w-100' label="Email" variant="outlined" type='email'
                                name="Email"
                                value={userData.Email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <TextField className='input-field bg-white w-100' label="Password" variant="outlined" type='password'
                                name="Password"
                                value={userData.Password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>

                    <Link to="/login" className='h6 d-flex justify-content-end text-dark text-decoration-none'>Already have an account?<span className='ms-2'> <img src="../images/Vector.png" alt="logo" width={30} height={15} /> </span> </Link>
                </div>
            </section>

            <button className='w-100 sign-up-btn p-2 rounded-pill border-0 mt-4' onClick={handleSubmit}>SIGN UP</button>

            <section className='footer'>
                <div>
                    <h6 className='text-center social-media'>Or sign up with social account </h6>
                    <div className='footer-logo d-flex justify-content-center'>
                        <img src="../images/Google.png" alt="" />
                        <img src="../images/Facebook.png" alt="" />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Signup;

this is my Login.jsx code

import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import "../LoginPage/Login.css"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='login-page'>
            <section className='container' style={{ backgroundColor: "#F9F9F9" }}>
                <section className='top-part'>
                    <div className='pt-3'>
                        <Link to="/signup"><ArrowBackIosNewIcon className='text-dark'/></Link>
                        <h1 className='mt-5 fw-bold'>Login</h1>
                    </div>
                </section>

                <section className='form-part'>
                    <div className='mt-5'>
                        <Form>
                            <Form.Group className="mb-3">
                                <TextField className='input-field bg-white w-100' label="Email" type='email' variant="outlined" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <TextField className='input-field bg-white w-100' label="Password" variant="outlined" type='password' />
                            </Form.Group>
                        </Form>

                        <a href="" className='h6 d-flex justify-content-end text-dark text-decoration-none'>Forgot your password? <span className='ms-2'> <img src="../images/Vector.png" alt="logo" width={30} height={15} /> </span></a>
                    </div>
                </section>

                <button className='w-100 sign-up-btn p-2 rounded-pill border-0 mt-4'>LOGIN</button>
                <section className='footer'>
                    <div>
                        <h6 className='text-center mt-5 social-media'>Or sign up with social account </h6>
                        <div className='footer-logo d-flex justify-content-center'>
                            <img src="../images/Google.png" alt="" />
                            <img src="../images/Facebook.png" alt="" />
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Login

this is my slice.js code

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userInfoURL } from "../config/url";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const saveUserInfo = createAsyncThunk(
    'data/saveUserInfo',
    async (userData) => {
        try {
            const response = await axios.post(userInfoURL, userData);
            console.log("stored", response.data);
            return response.data;
        } catch (error) {
            console.log("err");
            throw error;
        }
    }
);

const userSlice = createSlice({
    name: 'data',
    initialState,   
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveUserInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(saveUserInfo.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(saveUserInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;

this is my store.js code

import { configureStore } from '@reduxjs/toolkit';
import toolkitReducer from '../toolkit/slice';

const store = configureStore({
     reducer: {
          data: toolkitReducer,
     },
});

export default store;

this is my url.js code

const userInfoURL = "http://localhost:3001/userInfo";