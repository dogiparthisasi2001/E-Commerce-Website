import React from 'react'
import './style.css'
import '../Details/style.css'
import '../Login'
import Button from '@mui/material/Button';

const SetNewPassword = () => {
    return(
        <>
            <div className='passwordPage'>
                <div className='container passwordContainer'>
                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/reset_password.svg' alt='' />
                    <h1 className='mt-3 mb-3'>Set New Password</h1>
                    <p>Please create a new password that you don’t use on any other site.</p>
                    <div className='row'>
                        <div className='col-md-6'>
                            <form>
                                <div className='form-group mt-3'>
                                    <input type='text' placeholder='password *' className='form-control' />
                                </div>
                                <div className='form-group mt-3'>
                                    <input type='text' placeholder='confirm password *' className='form-control' />
                                </div>
                                <Button className='mt-3'>Reset Password</Button>
                            </form>
                        </div>
                        <div className='col-md-6 pl-5 pt-3'>
                            <h5>Passwod must:</h5>
                            <p className='mb-1 mt-3'>Be between 9 and 64 characters</p>
                            <p>Include at least tow of the following:</p>
                            <ul className='pl-3'>
                                <p><li>An uppercase character</li></p>
                                <p><li>A lowercase character</li></p>
                                <p><li>A number</li></p>
                                <p><li>A special character</li></p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SetNewPassword