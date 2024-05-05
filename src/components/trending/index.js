import React from 'react'
import './style.css'
import img1 from '../../assets/images/thumbnail-1.jpg'
import img2 from '../../assets/images/thumbnail-2.jpg'
import img3 from '../../assets/images/thumbnail-3.jpg'
import img4 from '../../assets/images/thumbnail-4.jpg'
import img5 from '../../assets/images/thumbnail-5.jpg'
import img6 from '../../assets/images/thumbnail-6.jpg'
import img7 from '../../assets/images/thumbnail-7.jpg'
import img8 from '../../assets/images/thumbnail-8.jpg'
import img9 from '../../assets/images/thumbnail-9.jpg'
import img10 from '../../assets/images/thumbnail-10.jpg'
import img11 from '../../assets/images/thumbnail-11.jpg'
import img12 from '../../assets/images/thumbnail-12.jpg'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';

const Trend = () => {
    return (
        <div className='topSellingBox'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <h3>Top Selling</h3>
                        <div className='items d-flex align-items-center'>
                            <div className='img'>
                                <Link to=""><img src={img1} className='w-100' alt='' /></Link>
                            </div>
                            <div className='info'>
                                <Link to=""><h5>Nestle Original Coffee-Mate Coffee Creamer</h5></Link>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                                </div>
                            </div>
                        </div>
                        <div className='items d-flex align-items-center'>
                            <div className='img'>
                                <Link to=""><img src={img2} className='w-100' alt='' /></Link>
                            </div>
                            <div className='info'>
                                <Link to=""><h5>All Natural Italian-Style Chicken Meatballs</h5></Link>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                                </div>
                            </div>
                        </div>
                        <div className='items d-flex align-items-center'>
                            <div className='img'>
                                <Link to=""><img src={img3} className='w-100' alt='' /></Link>
                            </div>
                            <div className='info'>
                                <Link to=""><h5>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h5></Link>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <h3>Trending Products</h3>
                        <div className='items d-flex align-items-center'>
                            <div className='img'>
                                <Link to=""><img src={img4} className='w-100' alt='' /></Link>
                            </div>
                            <div className='info'>
                                <Link to=""><h5>Organic Cage-Free Grade A Large Brown Eggs</h5></Link>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                                </div>
                            </div>
                        </div>
                        <div className='items d-flex align-items-center'>
                            <div className='img'>
                                <Link to=""><img src={img5} className='w-100' alt='' /></Link>
                            </div>
                            <div className='info'>
                                <Link to=""><h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5></Link>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                                </div>
                            </div>
                        </div>
                        <div className='items d-flex align-items-center'>
                            <div className='img'>
                                <Link to=""><img src={img6} className='w-100' alt='' /></Link>
                            </div>
                            <div className='info'>
                                <Link to=""><h5>Naturally Flavored Cinnamon Vanilla Light Roast Coffee</h5></Link>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <h3>Recently Added</h3>
                        <div className='items d-flex align-items-center'>
                            <div className='img'>
                                <Link to=""><img src={img7} className='w-100' alt='' /></Link>
                            </div>
                            <div className='info'>
                                <Link to=""><h5>Pepperidge Farm Farmhouse Hearty White Bread</h5></Link>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                                </div>
                            </div>
                        </div>
                        <div className='items d-flex align-items-center'>
                            <div className='img'>
                                <Link to=""><img src={img8} className='w-100' alt='' /></Link>
                            </div>
                            <div className='info'>
                                <Link to=""><h5>Organic Frozen Triple Berry Blend</h5></Link>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                                </div>
                            </div>
                        </div>
                        <div className='items d-flex align-items-center'>
                            <div className='img'>
                                <Link to=""><img src={img9} className='w-100' alt='' /></Link>
                            </div>
                            <div className='info'>
                                <Link to=""><h5>Oroweat Country Buttermilk Bread</h5></Link>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <h3>Top Rated</h3>
                        <div className='items d-flex align-items-center'>
                            <div className='img'>
                                <Link to=""><img src={img10} className='w-100' alt='' /></Link>
                            </div>
                            <div className='info'>
                                <Link to=""><h5>Foster Farms Takeout Crispy Classic Buffalo Wings</h5></Link>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                                </div>
                            </div>
                        </div>
                        <div className='items d-flex align-items-center'>
                            <div className='img'>
                                <Link to=""><img src={img11} className='w-100' alt='' /></Link>
                            </div>
                            <div className='info'>
                                <Link to=""><h5>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h5></Link>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                                </div>
                            </div>
                        </div>
                        <div className='items d-flex align-items-center'>
                            <div className='img'>
                                <Link to=""><img src={img12} className='w-100' alt='' /></Link>
                            </div>
                            <div className='info'>
                                <Link to=""><h5>All Natural Italian-Style Chicken Meatballs</h5></Link>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trend