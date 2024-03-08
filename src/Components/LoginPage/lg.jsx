import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import "../LoginPage/Login.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.get("http://localhost:3001/userInfo");
            const userData = response.data;
            
            const foundUser = userData.find(user => user.Email === loginData.email && user.Password === loginData.password);
            
            if (foundUser) {
                console.log("Success");
                // Redirect or set authentication status here
            } else {
                console.log("Incorrect");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <TextField className='input-field bg-white w-100' label="Email" type='email' variant="outlined"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <TextField className='input-field bg-white w-100' label="Password" variant="outlined" type='password'
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <button type="submit" className='w-100 sign-up-btn p-2 rounded-pill border-0 mt-4'>LOGIN</button>
                        </Form>

                        <a href="" className='h6 d-flex justify-content-end text-dark text-decoration-none'>Forgot your password? <span className='ms-2'> <img src="../images/Vector.png" alt="logo" width={30} height={15} /> </span></a>
                    </div>
                </section>

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

export default Login;
