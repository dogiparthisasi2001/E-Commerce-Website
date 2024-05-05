import React from 'react'
import './style.css'
import '../Details/style.css'
import '../Login/style.css'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ForgotPassword = () => {
    return (
        <>
            <div className='forgotPage'>
                <div className='container forgotContainer'>
                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/forgot_password.svg' alt='' />
                    <h1 className='mt-3 mb-3'>Forgot your Password ?</h1>
                    <p>Not to worry, we got you! Let’s get you a new password. Please enter your email address or your Username.</p>
                    <form>
                        <div className='form-group mt-4'>
                            <input type='text' placeholder='Username or Email *' className='form-control' />
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group mt-3'>
                                    <input type='text' placeholder='Security Code *' className='form-control' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group mt-3 security'>
                                    <input type='text' value='3 6 7 5' className='form-control' />
                                </div>
                            </div>
                        </div>
                        <div className='form-group d-flex align-items-center'>
                            <Checkbox {...label} style={{ color: '#3bb77e' }} /> I agree to terms & Policy
                            <p className='ml-auto'>Learn more..</p>
                        </div>

                        <Button className='mt-5'>Reset Password</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword