import React, { useState } from 'react'
import './style.css'
import '../Details/style.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Cart = () => {

    const [cartItems, setCartItems] = useState([
        { id: 1, img: 'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg', name: 'Field Roast Chao Cheese Creamy Original', unitCost: 31, quantity: 1, cost: 31 },
        { id: 2, img: 'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg', name: 'Blue Diamond Almonds Lightly Salted', unitCost: 26, quantity: 1, cost: 26 },
        { id: 3, img: 'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg', name: 'Fresh Organic Mustard Leaves Bell Pepper', unitCost: 48, quantity: 1, cost: 48 }
    ])


    const handleIncrement = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity + 1, cost: (item.quantity + 1) * item.unitCost }
                    : item
            )
        );
    };

    const handleDecrement = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1, cost: (item.quantity - 1) * item.unitCost }
                    : item
            )
        );
    };

    return (
        <>
            <div className='cartPage'>
                <div className='breadcrumbWrapper'>
                    <div className='container-fluid'>
                        <ul className='breadCrumb breadCrumb2'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                            <li><Link to="">Pages</Link></li>
                            <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                            <li>Cart</li>
                        </ul>
                    </div>
                </div>

                <section className='cartSection'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='d-flex align-items-center w-100 ml-5'>
                                <div className='left'>
                                    <h1 className='mt-5'>Your Cart</h1>
                                    <p>There are <span style={{ color: '#3bb77e' }}>3</span> products in your cart</p>
                                </div>
                                <span className='ml-auto align-items-center mr-5'>Clear Cart</span>
                            </div>
                            <div className='col-md-8'>

                                <div className='cartWrapper mt-4'>
                                    <div className='table-resp'>
                                        <table className='w-100'>
                                            <thead>
                                                <th className='pl-4'>Product</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                                <th>Sub Total</th>
                                                <th>Remove</th>
                                            </thead>

                                            <tbody>
                                                {
                                                    cartItems.map((item) => (
                                                        <tr key={item.id}>
                                                            <td>
                                                                <div className='d-flex align-items-center'>
                                                                    <img src={item.img} alt='' />
                                                                    <div className='info pl-5'>
                                                                        <h5>{item.name}</h5>
                                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className='mt-0' size='small' readOnly /><span>(4.5)</span>
                                                                    </div>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <h4 className='text-center' style={{ color: 'rgba(0, 0, 0, 0.5)' }}>${item.unitCost}</h4>
                                                            </td>
                                                            <td>
                                                                {
                                                                    <div className='addCartSection d-flex align-items-center'>
                                                                        <div className='counter'>
                                                                            <input
                                                                                type='number'
                                                                                value={item.quantity}
                                                                                onChange={(e) => {
                                                                                    const newQuantity = parseInt(e.target.value, 10);
                                                                                    setCartItems((prevItems) =>
                                                                                        prevItems.map((prevItem) =>
                                                                                            prevItem.id === item.id
                                                                                                ? { ...prevItem, quantity: isNaN(newQuantity) ? 1 : newQuantity, cost: (isNaN(newQuantity) ? 1 : newQuantity) * prevItem.unitCost }
                                                                                                : prevItem
                                                                                        )
                                                                                    );
                                                                                }}
                                                                            />
                                                                            <span className='arrow plus' onClick={() => handleIncrement(item.id)}>
                                                                                <KeyboardArrowUpIcon />
                                                                            </span>
                                                                            <span className='arrow minus' onClick={() => handleDecrement(item.id)}>
                                                                                <KeyboardArrowDownIcon />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </td>
                                                            <td>
                                                                <div className='text-center'>
                                                                    <h4>${item.cost}</h4>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className='svg text-center'><DeleteOutlineOutlinedIcon /></div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>

                                        </table>
                                    </div>
                                    <div className='buttons mt-5 d-flex align-items-center'>
                                        <Button><KeyboardBackspaceOutlinedIcon /> &nbsp; Continue Shopping</Button>
                                        <Button className='ml-auto'><AutorenewOutlinedIcon /> &nbsp; Update Cart</Button>
                                    </div>
                                </div>

                                <div className='row mt-5'>
                                    <div className='col-md-7'>
                                        <form className='cartForm'>
                                            <h2>Calculate Shopping</h2>
                                            <p>Flat Rate : <span style={{ color: '#3bb77e', opacity: 1 }}>5%</span></p>
                                            <div className='mt-3 form-group'>
                                                <input type='text' placeholder='Country' className='form-control' />
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='mt-3 form-group'>
                                                        <input type='text' placeholder='State' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='mt-3 form-group'>
                                                        <input type='text' placeholder='Pincode' className='form-control' />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='col-md-5 mt-5 pl-5'>
                                        <h2>Apply Coupon</h2>
                                        <p>Using a Promo Code ?</p>
                                        <div className='cartForm1'>
                                            <div className='row'>
                                                <div className='col-md-7'>
                                                    <div className='mt-3 form-group d-flex align-items-center'>
                                                        <input type='text' placeholder='Enter Your Coupon' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-5 mt-3'>
                                                    <Button className='ml-auto'>Apply</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 mt-5 pl-5'>
                                <div className='card p-4'>
                                    <div className='d-flex align-items-center mb-3'>
                                        <h5 className='mb-0'>Subtotal</h5>
                                        <h3 className='ml-auto mb-0'><span>$24</span></h3>
                                    </div>
                                    <hr className='w-100 my-2' />
                                    <div className='d-flex align-items-center mb-3'>
                                        <h5 className='mb-0'>Shipping</h5>
                                        <h3 className='ml-auto mb-0'><span>Free</span></h3>
                                    </div>
                                    <div className='d-flex align-items-center mb-3'>
                                        <h5 className='mb-0'>Estimate for</h5>
                                        <h3 className='ml-auto mb-0'><span>United Kingdom</span></h3>
                                    </div>
                                    <hr className='w-100 my-2' />
                                    <div className='d-flex align-items-center mb-3'>
                                        <h5 className='mb-0'>Total</h5>
                                        <h3 className='ml-auto mb-0'><span>$24</span></h3>
                                    </div>
                                    <div className='w-100'>
                                        <Button>Proceed to Checkout &nbsp; <LogoutOutlinedIcon /></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Cart