import React from 'react'
import './footer.css'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AppStore from '../../assets/images/app-store.jpg'
import GooglePlay from '../../assets/images/google-play.jpg'
import Payment from '../../assets/images/payment.png'
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <div className='footerWrapper'>

            <footer>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-3 part1'>
                            <Link to=""><img src={logo} alt='' /></Link>
                            <h6>Awesome grocery store website template</h6>
                            <p><LocationOnOutlinedIcon /> &nbsp; <b>Address:</b> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                            <p><HeadsetMicOutlinedIcon /> &nbsp; <b>Call Us:</b> (+91) - 540-025-124553</p>
                            <p><EmailOutlinedIcon className='send' /> &nbsp; <b>Email:</b> sale@Nest.com</p>
                            <p><AccessTimeOutlinedIcon /> &nbsp; <b>Hours:</b> 10:00 - 18:00, Mon - Sat</p>
                        </div>
                        <div className='col-md-6 part2'>
                            <div className='row'>
                                <div className='col'>
                                    <h4>Company</h4>
                                    <ul className='footer-list mb-sm-5 mb-md-0'>
                                        <li><Link to='#'>About Us</Link></li>
                                        <li><Link to='#'>Delivery Information</Link></li>
                                        <li><Link to='#'>Privacy Policy</Link></li>
                                        <li><Link to='#'>Terms</Link></li>
                                        <li><Link to='#'>Contact Us</Link></li>
                                        <li><Link to='#'>Support Center</Link></li>
                                        <li><Link to='#'>Careers</Link></li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <h4>Account</h4>
                                    <ul className='footer-list mb-sm-5 mb-md-0'>
                                        <li><Link to='#'>Sign In</Link></li>
                                        <li><Link to='#'>View Cart</Link></li>
                                        <li><Link to='#'>My Wishlist</Link></li>
                                        <li><Link to='#'>Track My Order</Link></li>
                                        <li><Link to='#'>Help Ticket</Link></li>
                                        <li><Link to='#'>Shipping Details</Link></li>
                                        <li><Link to='#'>Compare Products</Link></li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <h4>Corporate</h4>
                                    <ul className='footer-list mb-sm-5 mb-md-0'>
                                        <li><Link to='#'>Become a Vendor</Link></li>
                                        <li><Link to='#'>Affiliate Program</Link></li>
                                        <li><Link to='#'>Farm Business</Link></li>
                                        <li><Link to='#'>Farm Careers</Link></li>
                                        <li><Link to='#'>Our Suppliers</Link></li>
                                        <li><Link to='#'>Accessibility</Link></li>
                                        <li><Link to='#'>Promotions</Link></li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <h4>Popular</h4>
                                    <ul className='footer-list mb-sm-5 mb-md-0'>
                                        <li><Link to='#'>Milk & Dairies</Link></li>
                                        <li><Link to='#'>Butter & Margarine</Link></li>
                                        <li><Link to='#'>Eggs Substitutes</Link></li>
                                        <li><Link to='#'>Marmalades</Link></li>
                                        <li><Link to='#'>Sour Cream & Dips</Link></li>
                                        <li><Link to='#'>Tea & Kombucha</Link></li>
                                        <li><Link to='#'>Cheese</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 part3'>
                            <h4>Install App</h4>
                            <p>From App Store or Google Pay</p>
                            <div className='d-flex img'>
                                <Link to=""><img src={AppStore} width={150} height={50} alt='' /></Link>
                                <Link to=""><img src={GooglePlay} width={150} height={50} alt='' /></Link>
                            </div>
                            <p>Secured Payment Gateways</p>
                            <Link to=""><img src={Payment} alt='' /></Link>
                        </div>
                    </div>

                    <hr />

                    <div className='row lastStrip'>
                        <div className='col-md-3'>
                            <p>© 2022, Nest - HTML Ecommerce Template All rights reserved</p>
                        </div>
                        <div className='col-md-6 d-flex'>
                            <div className='m-auto d-flex align-items-center'>
                                <div className='phNo d-flex align-items-center'>
                                    <span><WifiCalling3OutlinedIcon /></span>
                                    <div className='info ml-3'>
                                        <h3 className='text-g mb-0 mr-5'>1900 - 888</h3>
                                        <p className='mb-0'>Working 8:00 - 22:00</p>
                                    </div>
                                    <span><WifiCalling3OutlinedIcon /></span>
                                    <div className='info ml-3'>
                                        <h3 className='text-g mb-0'>1900 - 666</h3>
                                        <p className='mb-0'>24/7 Support Center</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 part6'>
                            <div className='d-flex align-items-center'>
                                <h5>Follow Us</h5>
                                <ul className='list list-inline'>
                                    <li className='list-inline-items'>
                                        <Link to=""><FacebookOutlinedIcon /></Link>
                                    </li>
                                    <li className='list-inline-items'>
                                        <Link to=""><TwitterIcon /></Link>
                                    </li>
                                    <li className='list-inline-items'>
                                        <Link to=""><InstagramIcon /></Link>
                                    </li>
                                    <li className='list-inline-items'>
                                        <Link to=""><PinterestIcon /></Link>
                                    </li>
                                    <li className='list-inline-items'>
                                        <Link to=""><YouTubeIcon /></Link>
                                    </li>
                                </ul>
                            </div>
                            <p>Up to 15% discount on your first subscribe</p>
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer