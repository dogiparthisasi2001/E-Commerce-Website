import React from 'react'
import './style.css'
// import '../Cart/style.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Wishlist = () => {
    return (
        <>
            <div className='wishlistPage'>
                <div className='breadcrumbWrapper'>
                    <div className='container-fluid'>
                        <ul className='breadCrumb breadCrumb2'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                            <li><Link to="">Pages</Link></li>
                            <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                            <li>Wishlist</li>
                        </ul>
                    </div>
                </div>

                <div className='wishlistSection'>
                    <div className='container'>
                        <h1 className='mt-5' style={{ fontSize: '50px' }}>Your Wishlist</h1>
                        <p>There are <span style={{ color: '#3bb77e', opacity: 1 }}>5</span> products in your Wishlist</p>
                        <div className='wishlistWrapper mt-5'>
                            <div className='table-resp'>
                                <table className='w-100'>
                                    <thead>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Stock Status</th>
                                        <th>Action</th>
                                        <th>Remove</th>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center mt-3'>
                                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg' alt='' />
                                                    <div className='info pl-5'>
                                                        <h5><Link>Field Roast Chao Cheese Creamy Original</Link></h5>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className='mt-0' size='small' readOnly />
                                                        <span>(4.5)</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h4 style={{ color: 'grey' }}>$2.41</h4>
                                            </td>
                                            <td>
                                                <Button className='buttonOne'>In Stock</Button>
                                            </td>
                                            <td>
                                                <Button className='buttonTwo'>Add to Cart</Button>
                                            </td>
                                            <td>
                                                <div className='svg text-center'><DeleteOutlineOutlinedIcon /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center mt-3'>
                                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg' alt='' />
                                                    <div className='info pl-5'>
                                                        <h5><Link>Blue Diamond Almonds Lightly Salted</Link></h5>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className='mt-0' size='small' readOnly />
                                                        <span>(4.5)</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h4 style={{ color: 'grey' }}>$3.2</h4>
                                            </td>
                                            <td>
                                                <Button className='buttonOne'>In Stock</Button>
                                            </td>
                                            <td>
                                                <Button className='buttonTwo'>Add to Cart</Button>
                                            </td>
                                            <td>
                                                <div className='svg text-center'><DeleteOutlineOutlinedIcon /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center mt-3'>
                                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg' alt='' />
                                                    <div className='info pl-5'>
                                                        <h5><Link>Fresh Organic Mustard Leaves Bell Pepper</Link></h5>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className='mt-0' size='small' readOnly />
                                                        <span>(4.5)</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h4 style={{ color: 'grey' }}>$2.43</h4>
                                            </td>
                                            <td>
                                                <Button className='buttonOne'>In Stock</Button>
                                            </td>
                                            <td>
                                                <Button className='buttonTwo'>Add to Cart</Button>
                                            </td>
                                            <td>
                                                <div className='svg text-center'><DeleteOutlineOutlinedIcon /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center mt-3'>
                                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg' alt='' />
                                                    <div className='info pl-5'>
                                                        <h5><Link>Angie’s Boomchickapop Sweet & Salty</Link></h5>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className='mt-0' size='small' readOnly />
                                                        <span>(4.5)</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h4 style={{ color: 'grey' }}>$3.21</h4>
                                            </td>
                                            <td>
                                                <Button className='buttonThree'>Out Stock</Button>
                                            </td>
                                            <td>
                                                <Button className='buttonFour'>Contact Us</Button>
                                            </td>
                                            <td>
                                                <div className='svg text-center'><DeleteOutlineOutlinedIcon /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center mt-3'>
                                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg' alt='' />
                                                    <div className='info pl-5'>
                                                        <h5><Link>Foster Farms Takeout Crispy Classic</Link></h5>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className='mt-0' size='small' readOnly />
                                                        <span>(4.5)</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h4 style={{ color: 'grey' }}>$3.17</h4>
                                            </td>
                                            <td>
                                                <Button className='buttonOne'>In Stock</Button>
                                            </td>
                                            <td>
                                                <Button className='buttonTwo'>Add to Cart</Button>
                                            </td>
                                            <td>
                                                <div className='svg text-center'><DeleteOutlineOutlinedIcon /></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist