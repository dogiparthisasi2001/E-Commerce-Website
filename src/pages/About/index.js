import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import '../Details/style.css'
import Slider from 'react-slick'
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Card1 from '../../assets/images/icon-1.svg'
import Card2 from '../../assets/images/icon-2.svg'
import Card3 from '../../assets/images/icon-3.svg'
import Card4 from '../../assets/images/icon-4.svg'
import Card5 from '../../assets/images/icon-5.svg'
import Card6 from '../../assets/images/icon-6.svg'
import Footer from '../../components/footer/footer'

const About = () => {

    var related = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    }

    return (
        <div className='AboutPage'>
            <div className='breadcrumbWrapper'>
                <div className='container-fluid'>
                    <ul className='breadCrumb breadCrumb2'>
                        <li><Link to="">Home</Link></li>
                        <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                        <li><Link to="">Pages</Link></li>
                        <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>

            <div className='container aboutContainer'>
                <div className='row welcomeRow pt-5'>
                    <div className='col-md-6'>
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png' alt='' className='w-100' />
                    </div>
                    <div className='col-md-6 pl-4'>
                        <div className='mt-5'>
                            <h1 className='pb-3'>Welcome to Nest</h1>
                            <p>At <span style={{ color: '#3bb77e' }}>Nest</span>, we believe that shopping is more than just a transaction; it's an experience. Our journey began with a shared passion, we are proud to bring that passion to you.</p>
                            <p>We stand by the principle that quality is never compromised. Each product in our catalog undergoes rigorous testing and scrutiny to ensure it meets our standards of excellence. Every item is a testament to our dedication to craftsmanship.</p>
                            <p>We strive to create an online shopping experience that goes beyond expectations. Our customer support team is always ready to assist you, ensuring that every purchase is smooth and enjoyable.</p>
                        </div>
                        <Slider {...related} className='prodSlider mt-4'>
                            <div className='item'>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-2.png' alt='' className='w-100' />
                            </div>
                            <div className='item'>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-3.png' alt='' className='w-100' />
                            </div>
                            <div className='item'>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-4.png' alt='' className='w-100' />
                            </div>
                            <div className='item'>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-2.png' alt='' className='w-100' />
                            </div>
                            <div className='item'>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-3.png' alt='' className='w-100' />
                            </div>
                            <div className='item'>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-4.png' alt='' className='w-100' />
                            </div>
                        </Slider>
                    </div>
                </div>

                <h1 className='h1 mt-3'>What We Provide ?</h1>

                <div className='row cardRow mt-5'>
                    <div className='col-md-4 card'>
                        <img src={Card1} alt='' />
                        <h3>Best Prices & Offers</h3>
                        <p>Discover unbeatable prices and exclusive offers that redefine your shopping experience.</p>
                        <p className='more'>Read More..</p>
                    </div>
                    <div className='col-md-4 card'>
                        <img src={Card2} alt='' />
                        <h3>Wide Assortment</h3>
                        <p>Indulge in our extensive collection of handpicked products, meticulously curated to cater to every taste and lifestyle.</p>
                        <p className='more'>Read More..</p>
                    </div>
                    <div className='col-md-4 card'>
                        <img src={Card3} alt='' />
                        <h3>Free Delivery</h3>
                        <p>Elevate your shopping experience with the added benefit of hassle-free and budget-friendly delivery.</p>
                        <p className='more'>Read More..</p>
                    </div>
                </div>
                <div className='row cardRow'>
                    <div className='col-md-4 card'>
                        <img src={Card4} alt='' />
                        <h3>Easy Returns</h3>
                        <p>Discover unbeatable prices and exclusive offers that redefine your shopping experience.</p>
                        <p className='more'>Read More..</p>
                    </div>
                    <div className='col-md-4 card'>
                        <img src={Card5} alt='' />
                        <h3>100% Satisfaction</h3>
                        <p>Indulge in our extensive collection of handpicked products, meticulously curated to cater to every taste and lifestyle.</p>
                        <p className='more'>Read More..</p>
                    </div>
                    <div className='col-md-4 card'>
                        <img src={Card6} alt='' />
                        <h3>Great Daily Deal</h3>
                        <p>Elevate your shopping experience with the added benefit of hassle-free and budget-friendly delivery.</p>
                        <p className='more'>Read More..</p>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-5.png' alt='' className='w-100' />
                        </div>
                        <div className='col-md-5 pl-4'>
                            <h4 className='pt-5'>Our performance</h4>
                            <h1>Your Partner for e-commerce grocery solution</h1>
                            <p className='pt-4 pb-3'>We recognize the importance of a quick and hassle-free checkout process. Our streamlined checkout minimizes the number of steps required, allowing you to complete your purchase swiftly and efficiently. Say goodbye to lengthy and complicated checkouts.</p>
                            <p className='pb-3'>Our website boasts a responsive and adaptive design, ensuring a consistent and enjoyable shopping experience across various devices. Whether you're on a desktop, tablet, or smartphone, you can count on a user-friendly interface that adapts to your screen size.</p>
                        </div>
                    </div>
                </div>

                <h1 className='h1'>Our Team</h1>

                <div className='teamSection mb-5'>
                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <p style={{ color: '#3bb77e' }}>Our Team</p>
                            <h1>Meet Our Expert Team</h1>
                            <p className='pt-4 pb-3'>As the visionary leader of [Your E-Commerce Brand], John brings years of industry expertise and a forward-thinking approach to guide our team. His commitment to innovation and customer satisfaction sets the tone for our company's success.</p>
                            <p className='pb-3'>Dedicated to ensuring your experience is seamless, Jane leads our customer support team with a friendly and responsive approach. From addressing queries to resolving concerns, she is committed to delivering top-notch service.</p>
                            <Button>View All Members</Button>
                        </div>
                        <div className='col-md-4 team'>
                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-6.png' alt='' className='w-100' />
                            <div className='teamInfo'>
                                <h4>H. Merinda</h4>
                                <h5>CEO & Co-Founder</h5>
                            </div>
                        </div>
                        <div className='col-md-4 team'>
                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-8.png' alt='' className='w-100' />
                            <div className='teamInfo'>
                                <h4>Dilan Spectar</h4>
                                <h5>Head Engineer</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <Footer />
        </div>
    )
}

export default About