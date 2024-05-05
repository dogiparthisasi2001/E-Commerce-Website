import React, { useState } from 'react'
import './style.css'
import '../Details/style.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CommitOutlinedIcon from '@mui/icons-material/CommitOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const Account = () => {

    const [activeTabs, setActiveTabs] = useState(0)

    return (
        <>
            <div className='accountPage'>
                <div className='breadcrumbWrapper'>
                    <div className='container-fluid'>
                        <ul className='breadCrumb breadCrumb2'>
                            <li><Link to="">Home</Link></li>
                            <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                            <li><Link to="">Pages</Link></li>
                            <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                            <li>My Account</li>
                        </ul>
                    </div>
                </div>

                <div className='container accountContainer'>
                    <div className='row accountRow'>
                        <div className='col-md-3 accButton'>
                            <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => setActiveTabs(0)}><CommitOutlinedIcon /> &nbsp; Dashboard</Button>
                            <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => setActiveTabs(1)}><ShoppingBagOutlinedIcon /> &nbsp; Orders</Button>
                            <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => setActiveTabs(2)}><ShoppingCartOutlinedIcon /> &nbsp; Track your Order</Button>
                            <Button className={`${activeTabs === 3 && 'active'}`} onClick={() => setActiveTabs(3)}><LocationOnOutlinedIcon /> &nbsp; My Address</Button>
                            <Button className={`${activeTabs === 4 && 'active'}`} onClick={() => setActiveTabs(4)}><PermIdentityOutlinedIcon /> &nbsp; Account Details</Button>
                            <Link to="/login"><Button><LogoutOutlinedIcon /> &nbsp; Logout</Button></Link>
                        </div>

                        <div className='col-md-9 buttonInfo'>
                            {
                                activeTabs === 0 &&

                                <div className='pl-5 pt-5'>
                                    <h1>Hello Sasikala!</h1>
                                    <p className='pt-4 pr-5'>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                                </div>
                            }

                            {
                                activeTabs === 1 &&

                                <div className='pl-5 pt-5'>
                                    <h1 className='pb-4'>Your Orders</h1>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Order</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Total</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#1357</td>
                                                <td>March 45, 2020</td>
                                                <td>Processing</td>
                                                <td>$125.00 for 2 item</td>
                                                <td><a href="#" class="btn-small d-block">View</a></td>
                                            </tr>
                                            <tr>
                                                <td>#2468</td>
                                                <td>June 29, 2020</td>
                                                <td>Completed</td>
                                                <td>$364.00 for 5 item</td>
                                                <td><a href="#" class="btn-small d-block">View</a></td>
                                            </tr>
                                            <tr>
                                                <td>#2366</td>
                                                <td>August 02, 2020</td>
                                                <td>Completed</td>
                                                <td>$280.00 for 3 item</td>
                                                <td><a href="#" class="btn-small d-block">View</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            }

                            {
                                activeTabs === 2 &&

                                <div className='accContent pl-5 pt-5 pr-5'>
                                    <h1 className='pb-4'>Orders Tracking</h1>
                                    <p>To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                                    <form className='accountForm pt-3'>
                                        <p>Order Id</p>
                                        <div className='form-group mt-2'>
                                            <input type='text' placeholder='Found in your order confirmation email' className='form-control' />
                                        </div>
                                        <p className='pt-3'>Billing email</p>
                                        <div className='form-group mt-2'>
                                            <input type='text' placeholder='Email you used during checkout' className='form-control' />
                                        </div>
                                        <Button className='mt-4'>Track</Button>
                                    </form>
                                </div>
                            }

                            {
                                activeTabs === 3 &&

                                <div className='pt-5 pl-5'>
                                    <div className='row address'>
                                        <div className='col-md-6'>
                                            <h1 className='mb-4'>Billing Address</h1>
                                            <p>3522 Interstate</p>
                                            <p>75 Business Spur,</p>
                                            <p>Sault Ste.</p>
                                            <p>Marie, MI 49783</p>
                                            <p>New York</p>
                                            <p style={{ color: '#3bb77e' }}>Edit</p>
                                        </div>
                                        <div className='col-md-6'>
                                            <h3 className='mb-4'>Shipping Address</h3>
                                            <p>4299 Express Lane</p>
                                            <p>Sarasota,</p>
                                            <p>FL 34249 USA</p>
                                            <p>Phone: 1.941.227.4444</p>
                                            <p>Sarasota</p>
                                            <p style={{ color: '#3bb77e' }}>Edit</p>
                                        </div>
                                    </div>
                                </div>
                            }

                            {
                                activeTabs === 4 &&

                                <div className='accContent pl-5 pt-5'>
                                    <h2>Account Details</h2>
                                    <p>Already have an Account ? <Link to="/login">Login Instead</Link></p>
                                    <form>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='form-group mt-3'>
                                                    <label>First Name *</label>
                                                    <input type='text' className='form-control' />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group mt-3'>
                                                    <label>Last Name *</label>
                                                    <input type='text' className='form-control' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-group mt-4'>
                                            <label>Display Name *</label>
                                            <input type='text' className='form-control' />
                                        </div>
                                        <div className='form-group mt-4'>
                                            <label>Email Address *</label>
                                            <input type='text' className='form-control' />
                                        </div>
                                        <div className='form-group mt-4'>
                                            <label>Current Password *</label>
                                            <input type='text' className='form-control' />
                                        </div>
                                        <div className='form-group mt-4'>
                                            <label>New Password *</label>
                                            <input type='text' className='form-control' />
                                        </div>
                                        <div className='form-group mt-4'>
                                            <label>Confirm Password *</label>
                                            <input type='text' className='form-control' />
                                        </div>
                                        <Button className='mt-4'>Save Changes</Button>
                                    </form>
                                </div>
                            }

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account