import React from 'react'
import './style.css'
import '../Details/style.css'
import '../Contact/style.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Register = () => {

    const [value, setValue] = React.useState('I am a Customer');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div className='registerPage'>
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

                <div className='container registerContainer'>
                    <div className='row registerRow'>
                        <div className='col-md-6 registerForm'>
                            <form>
                                <h1>Create an Account</h1>
                                <p>Already have an account ? <Link to="/login">Login</Link></p>
                                <div className='form-group mt-4'>
                                    <input type='text' placeholder='Username' className='form-control' />
                                </div>
                                <div className='form-group mt-4'>
                                    <input type='text' placeholder='Email' className='form-control' />
                                </div>
                                <div className='form-group mt-4'>
                                    <input type='text' placeholder='Password' className='form-control' />
                                </div>
                                <div className='form-group mt-4'>
                                    <input type='text' placeholder='Confirm Password' className='form-control' />
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
                                <div className='form-group'>

                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="I am a Customer" control={<Radio style={{ color: '#3bb77e' }} />} label="I am a Customer" />
                                        <FormControlLabel value="I am a Vendor" control={<Radio style={{ color: '#3bb77e' }} />} label="I am a Vendor" />
                                    </RadioGroup>

                                </div>
                                <div className='form-group d-flex align-items-center'>
                                    <Checkbox {...label} style={{ color: '#3bb77e' }} /> I agree to terms & policy
                                    <p className='ml-auto align-items-center'>Learn more</p>
                                </div>
                                <Button className='mt-4'>Submit & Register</Button>
                            </form>
                        </div>

                        <div className='col-md-6 align-items-center regBox'>
                            <Button className='bg-primary' style={{color: '#fff'}}>Continue with Facebook</Button>
                            <Button className='google'>Continue with Google</Button>
                            <Button style={{color: '#fff', background: '#000'}}>Continue with Apple</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register