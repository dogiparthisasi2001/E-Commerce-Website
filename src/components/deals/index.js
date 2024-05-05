import React from 'react'
import './style.css'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const Deals = () => {
    return (
        <div className='dealSection'>
            <div className='container-fluid'>
                <div className='d-flex align-items-center'>
                    <h2 className='hd mt-0 mb-0'>Deals of The Day</h2>
                    <ul className='list list-inline ml-auto mt-4 mb-0'>
                        <li className='list-inline-item'>
                            <a>All Deals <ChevronRightOutlinedIcon /></a>
                        </li>
                    </ul>
                </div>
                <div className='row productRow'>
                    <div className='col-sm-3 col'>
                        <div className='box'>
                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-5.png' alt='' />
                            <div className='sq b1'>
                                <h5>415<p>Days</p></h5>                                
                            </div>
                            <div className='sq b2'>
                                <h5>05<p>Hours</p></h5>                                
                            </div>
                            <div className='sq b3'>
                                <h5>22<p>Mins</p></h5>                                
                            </div>
                            <div className='sq b4'>
                                <h5>59<p>Sec</p></h5>                                
                            </div>
                        </div>
                        <div className='bb'>
                            <p className='title'>Seeds of Change Organic Quinoa, Brown, & Red Rice</p>
                            <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} size='small' className='ml-4' readOnly />
                            <span className='brand d-block'>By  <Link className='text-g'>Nestfood</Link></span>
                            <div className='d-flex align-items-center mt-3'>
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$32.85</span><span className='oldPrice'>$33.8</span>
                                </div>
                                <Button className='bg-g ml-auto'><ShoppingCartOutlinedIcon /> &nbsp; Add</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3 col'>
                        <div className='box'>
                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-6.png' alt='' />
                            <div className='sq b1'>
                                <h5>811<p>Days</p></h5>                                
                            </div>
                            <div className='sq b2'>
                                <h5>05<p>Hours</p></h5>                                
                            </div>
                            <div className='sq b3'>
                                <h5>22<p>Mins</p></h5>                                
                            </div>
                            <div className='sq b4'>
                                <h5>09<p>Sec</p></h5>                                
                            </div>
                        </div>
                        <div className='bb'>
                            <p className='title'>Perdue Simply Smart Organics Gluten Free</p>
                            <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} size='small' className='ml-4' readOnly />
                            <span className='brand d-block'>By  <Link className='text-g'>Old EI Paso</Link></span>
                            <div className='d-flex align-items-center mt-3'>
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$24.85</span><span className='oldPrice'>$26.8</span>
                                </div>
                                <Button className='bg-g ml-auto'><ShoppingCartOutlinedIcon /> &nbsp; Add</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3 col'>
                        <div className='box'>
                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-7.png' alt='' />
                            <div className='sq b1'>
                                <h5>1145<p>Days</p></h5>                                
                            </div>
                            <div className='sq b2'>
                                <h5>05<p>Hours</p></h5>                                
                            </div>
                            <div className='sq b3'>
                                <h5>21<p>Mins</p></h5>                                
                            </div>
                            <div className='sq b4'>
                                <h5>33<p>Sec</p></h5>                                
                            </div>
                        </div>
                        <div className='bb'>
                            <p className='title'>Signature Wood-Fired Mushroom and Caramelized</p>
                            <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} size='small' className='ml-4' readOnly />
                            <span className='brand d-block'>By  <Link className='text-g'>Progresso</Link></span>
                            <div className='d-flex align-items-center mt-3'>
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$12.85</span><span className='oldPrice'>$18.8</span>
                                </div>
                                <Button className='bg-g ml-auto'><ShoppingCartOutlinedIcon /> &nbsp; Add</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3 col'>
                        <div className='box'>
                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-8.png' alt='' />
                            <div className='sq b1'>
                                <h5>387<p>Days</p></h5>                                
                            </div>
                            <div className='sq b2'>
                                <h5>05<p>Hours</p></h5>                                
                            </div>
                            <div className='sq b3'>
                                <h5>21<p>Mins</p></h5>                                
                            </div>
                            <div className='sq b4'>
                                <h5>13<p>Sec</p></h5>                                
                            </div>
                        </div>
                        <div className='bb'>
                            <p className='title'>Simply Lemonade with Raspberry Juice</p>
                            <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} size='small' className='ml-4' readOnly />
                            <span className='brand d-block'>By  <Link className='text-g'>Yoplait</Link></span>
                            <div className='d-flex align-items-center mt-3'>
                                <div className='d-flex align-items-center'>
                                    <span className='price text-g font-weight-bold'>$15.85</span><span className='oldPrice'>$16.8</span>
                                </div>
                                <Button className='bg-g ml-auto'><ShoppingCartOutlinedIcon /> &nbsp; Add</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deals