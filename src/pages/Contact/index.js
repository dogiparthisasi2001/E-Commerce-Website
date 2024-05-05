import React from 'react'
import './style.css'
import '../Details/style.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Footer from '../../components/footer/footer'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Contact = (props) => {
    return (
        <>
            <div className='contactPage'>
                <div className='breadcrumbWrapper'>
                    <div className='container-fluid'>
                        <ul className='breadCrumb breadCrumb2'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                            <li><Link to="">Pages</Link></li>
                            <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                <div className='container-fluid contactContainer'>
                    <div className='row contactRow pt-5 pb-5 mb-3'>
                        <div className='col-md-4 pt-3'>
                            <h4>How can we help you ?</h4>
                            <h1>Let us know how we can help you</h1>
                            <p>From farm-fresh produce to artisanal cheeses and top-grade meats, we have everything you need to create delicious and memorable meals.</p>
                            <p>Quality is at the heart of everything we do. We partner with trusted suppliers and producers to ensure that every item in our inventory meets stringent quality standards.</p>
                        </div>
                        <div className='col-md-4 pl-4 mt-auto'>
                            <h4>01. Visit Feedback</h4>
                            <p>We'd love to hear about your experience! Please share your thoughts and suggestions from your recent visit. Your feedback helps us improve and serve you better.</p>
                            <h4>03. Billing Inquiries</h4>
                            <p>Do you have questions about your recent billing statement or need assistance with any billing-related matters? </p>
                        </div>
                        <div className='col-md-4 pl-4 mt-auto'>
                            <h4>02. Employer Services</h4>
                            <p>We're here to assist you with any inquiries or feedback you may have regarding our employer services.</p>
                            <h4>04.General Inquiries</h4>
                            <p>Feel free to customize the contact information and form fields based on your preferences and the information you'd like to collect.</p>
                        </div>
                    </div>

                    {/* <div className='mapRow'>
                        <Map
                            google={props.google}
                            initialCenter={{ lat: 37.7749, lng: -122.4194 }}
                            zoom={14}
                        />
                    </div> */}

                    <div className='row addressRow pt-5 pb-5'>
                        <div className='col-md-4'>
                            <h4>Office</h4>
                            <p>205 North Michigan Avenue, Suite 810</p>
                            <p>Chicago, 60601, USA</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: contact@Evara.com</p>
                            <Button><LocationOnOutlinedIcon /> &nbsp; View Map</Button>
                        </div>
                        <div className='col-md-4'>
                            <h4>Studio</h4>
                            <p>205 North Michigan Avenue, Suite 810</p>
                            <p>Chicago, 60601, USA</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: contact@Evara.com</p>
                            <Button><LocationOnOutlinedIcon /> &nbsp; View Map</Button>
                        </div>
                        <div className='col-md-4'>
                            <h4>Shop</h4>
                            <p>205 North Michigan Avenue, Suite 810</p>
                            <p>Chicago, 60601, USA</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: contact@Evara.com</p>
                            <Button><LocationOnOutlinedIcon /> &nbsp; View Map</Button>
                        </div>
                    </div>

                    <div className='contactForm mt-5 mb-5'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <form className='contact'>
                                    <h4>Contact Form</h4>
                                    <h1>Drop Us a Line</h1>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='mt-3 form-group'>
                                                <input type='text' placeholder='First Name' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='mt-3 form-group'>
                                                <input type='text' placeholder='Email' className='form-control' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='mt-3 form-group'>
                                                <input type='text' placeholder='Last Name' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='mt-3 form-group'>
                                                <input type='text' placeholder='Subject' className='form-control' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-3 form-group'>
                                        <textarea placeholder='Message' className='form-control'></textarea>
                                    </div>
                                    <Button className='mt-3'>Send Message</Button>
                                </form>
                            </div>
                            <div className='col-md-4'>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/contact-2.png' alt='' className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <Footer />
        </>
    )
}

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyCofnT-LP2J6n7_hWGcgnEmUKdGMU4qCm0' 
//   })(Contact);

export default Contact