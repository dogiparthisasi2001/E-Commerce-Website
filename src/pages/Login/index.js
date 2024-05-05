import React, { useState } from 'react'
import './style.css'
import '../Details/style.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Login = () => {

    return (
        <>
            <div className='loginPage'>
                <div className='breadcrumbWrapper'>
                    <div className='container-fluid'>
                        <ul className='breadCrumb breadCrumb2'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                            <li><Link to="">Pages</Link></li>
                            <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                            <li>My Account</li>
                        </ul>
                    </div>
                </div>

                <div className='container loginContainer'>
                    <div className='row loginRow pt-5 mt-5'>
                        <div className='col-md-6'>
                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/login-1.png' alt='' className='w-100' />
                        </div>
                        <div className='loginForm col-md-6 pl-4 pt-4'>
                            <form>
                                <h1>Login</h1>
                                <p>Don't have an Account ? <Link to="/register">Click Here</Link></p>
                                <div className='form-group mt-4'>
                                    <input type='text' placeholder='Username or Email *' className='form-control' />
                                </div>
                                <div className='form-group mt-4'>
                                    <input type='text' placeholder='Your Password *' className='form-control' />
                                </div>
                                <div className='row'>
                                    <div className='col-md-5'>
                                        <div className='form-group mt-3'>
                                            <input type='text' placeholder='Security Code *' className='form-control' />
                                        </div>
                                    </div>
                                    <div className='col-md-5 ml-auto'>
                                        <div className='form-group mt-3 security'>
                                            <input type='text' className='form-control' value='3 8 7 5' />
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group d-flex align-items-center'>
                                    <Checkbox {...label} style={{ color: '#3bb77e' }} /> Remember Me
                                    <p className='ml-auto mt-3'>Forgot Password ?</p>
                                </div>
                                <Button className='mt-4'>Log In</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}

export default Login