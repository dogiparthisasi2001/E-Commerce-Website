import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import MegaMenu from '../../../assets/images/mega-menu.png'
import Cat1 from '../../../assets/images/category-1.svg'
import Cat2 from '../../../assets/images/category-2.svg'
import Cat3 from '../../../assets/images/category-3.svg'
import Cat4 from '../../../assets/images/category-4.svg'
import Cat5 from '../../../assets/images/category-5.svg'
import Cat6 from '../../../assets/images/category-6.svg'
import Cat7 from '../../../assets/images/category-7.svg'
import Cat8 from '../../../assets/images/category-8.svg'
import Cat9 from '../../../assets/images/category-9.svg'
import Cat10 from '../../../assets/images/category-10.svg'

const Nav = () => {

    const [isActive, setIsActive] = useState(false)

    const handleButtonClick = () => {
        setIsActive(!isActive)
    } 

    return (
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row position-relative'>
                    <div className='col-sm-3 part1 d-flex align-items-center'>
                        <Button className={`bg-g text-white catTab res-hide ${isActive ? 'active' : ''}`} onClick={handleButtonClick}><GridViewOutlinedIcon /> &nbsp; Browse All Categories<KeyboardArrowDownIcon /></Button>
                        <div className="menu">
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <ul className='mt-4 mb-0'>
                                        <li><Link to="/coffee"><img src={Cat1} alt='' /> &nbsp; &nbsp; Milks & Dairies</Link></li>
                                        <li><Link to="/meat"><img src={Cat2} alt='' /> &nbsp; &nbsp; Clothing & Beauty</Link></li>
                                        <li><Link to="/cakes"><img src={Cat3} alt='' /> &nbsp; &nbsp; PetFoods & Toy</Link></li>
                                        <li><Link to="/vegetables"><img src={Cat4} alt='' /> &nbsp; &nbsp; Baking Material</Link></li>
                                        <li><Link to="/meat"><img src={Cat5} alt='' /> &nbsp; &nbsp; Fresh Fruit</Link></li>
                                    </ul>
                                </div>
                                <div className='col-sm-6'>
                                <ul className='mt-4 mb-0'>
                                        <li><Link to="/coffee"><img src={Cat6} alt='' /> &nbsp; &nbsp; Wines & Drinks</Link></li>
                                        <li><Link to="/meat"><img src={Cat7} alt='' /> &nbsp; &nbsp; Fresh Seafood</Link></li>
                                        <li><Link to="/meat"><img src={Cat8} alt='' /> &nbsp; &nbsp; Fast Food</Link></li>
                                        <li><Link to="/vegetables"><img src={Cat9} alt='' /> &nbsp; &nbsp; Vegetables</Link></li>
                                        <li><Link to="/coffee"><img src={Cat10} alt='' /> &nbsp; &nbsp; Bread & Juice</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-7 part2 position-static'>
                        <nav>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item '>
                                    <Button><Link to="/">Home</Link></Button>
                                    <div className='dropdown_menu'>
                                        <ul>
                                            <li><Button><Link to="/">Home 1</Link></Button></li>
                                            <li><Button><Link to="/">Home 2</Link></Button></li>
                                            <li><Button><Link to="/">Home 3</Link></Button></li>
                                            <li><Button><Link to="/">Home 4</Link></Button></li>
                                            <li><Button><Link to="/">Home 5</Link></Button></li>
                                            <li><Button><Link to="/">Home 6</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/about">About</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link>Shop</Link></Button>
                                    <div className='dropdown_menu'>
                                        <ul>
                                            <li><Button><Link to="">Shop Grid - Right Sidebar</Link></Button></li>
                                            <li><Button><Link to="">Shop Grid - Left Sidebar</Link></Button></li>
                                            <li><Button><Link to="">Shop List - Right Sidebar</Link></Button></li>
                                            <li><Button><Link to="">Shop List - Left Sidebar</Link></Button></li>
                                            <li><Button><Link to="">Shop - Wide</Link></Button></li>
                                            <li><Button><Link to="">Single Product</Link></Button></li>
                                            <li><Button><Link to="">Shop - Filter</Link></Button></li>
                                            <li><Button><Link to="">Shop - Wishlist</Link></Button></li>
                                            <li><Button><Link to="">Shop - Cart</Link></Button></li>
                                            <li><Button><Link to="">Shop - Checkout</Link></Button></li>
                                            <li><Button><Link to="">Shop - Compare</Link></Button></li>
                                            <li><Button><Link to="">Shop Invoice</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/vendors">Vendors</Link></Button>
                                    <div className='dropdown_menu'>
                                        <ul>
                                            <li><Button><Link to="">Vendors Grid</Link></Button></li>
                                            <li><Button><Link to="">Vendors List</Link></Button></li>
                                            <li><Button><Link to="">Vendor Details 01</Link></Button></li>
                                            <li><Button><Link to="">Vendor Details 02</Link></Button></li>
                                            <li><Button><Link to="">Vendor Dashboard</Link></Button></li>
                                            <li><Button><Link to="">Vendor Guide</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item position-static'>
                                    <Button><Link>Mega Menu</Link></Button>
                                    <div className='dropdown_menu mega_menu w-100'>
                                        <div className='row'>
                                            <div className='col-sm-2 coll'>
                                                <h4 className='text-g'>Fruits & Vegetables</h4>
                                                <ul className='mt-4 mb-0'>
                                                    <li><Link to="">Fresh Vegetables</Link></li>
                                                    <li><Link to="">Herbs & Seasonings</Link></li>
                                                    <li><Link to="">Cuts & Sprouts</Link></li>
                                                    <li><Link to="">Exotic Fruits & Veggies</Link></li>
                                                    <li><Link to="">Packaged Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className='col-sm-2 coll'>
                                                <h4 className='text-g'>Breakfast & Dairy</h4>
                                                <ul className='mt-4 mb-0'>
                                                    <li><Link to="">Milk & Flavoured Milk</Link></li>
                                                    <li><Link to="">Butter & Margarine</Link></li>
                                                    <li><Link to="">Eggs Substitutes</Link></li>
                                                    <li><Link to="">Sour Cream</Link></li>
                                                    <li><Link to="">Cheese</Link></li>
                                                </ul>
                                            </div>
                                            <div className='col-sm-2 coll'>
                                                <h4 className='text-g'>Meat & Seafood</h4>
                                                <ul className='mt-4 mb-0'>
                                                    <li><Link to="">Meat & Poultry</Link></li>
                                                    <li><Link to="">Chicken</Link></li>
                                                    <li><Link to="">Sliced Deli Meat</Link></li>
                                                    <li><Link to="">Wild Caught Fillets</Link></li>
                                                    <li><Link to="">Crab & Shellfish</Link></li>
                                                </ul>
                                            </div>
                                            <div className='col-sm-4.5'>
                                                <img src={MegaMenu} alt='' className='w-100 ml-auto' style={{ width: 400, height: 260 }} />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/blog">Blog</Link></Button>
                                    <div className='dropdown_menu'>
                                        <ul>
                                            <li><Button><Link to="/blog">Blog Category Grid</Link></Button></li>
                                            <li><Button><Link to="/blog">Blog Category List</Link></Button></li>
                                            <li><Button><Link to="/blog">Blog Category Big</Link></Button></li>
                                            <li><Button><Link to="/blog">Blog Category Wide</Link></Button></li>
                                            <li><Button><Link to="/blog">Single Post </Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link>Pages</Link></Button>
                                    <div className='dropdown_menu'>
                                        <ul>
                                            <li><Button><Link to="/about">About Us</Link></Button></li>
                                            <li><Button><Link to="/contact">Contact Us</Link></Button></li>
                                            <li><Button><Link to="/account">My Account</Link></Button></li>
                                            <li><Button><Link to="/login">Login</Link></Button></li>
                                            <li><Button><Link to="/register">Register</Link></Button></li>
                                            <li><Button><Link to="/forgot_password">Forgot Password</Link></Button></li>
                                            <li><Button><Link to="/set_new_password">Reset Password</Link></Button></li>
                                            <li><Button><Link to="/purchase_guide">Purchase Guide</Link></Button></li>
                                            <li><Button><Link to="/privacy_policy">Privacy Policy</Link></Button></li>
                                            <li><Button><Link to="/terms_of_service">Terms of Services</Link></Button></li>
                                            <li><Button><Link to="*">404 Page</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/contact">Contact</Link></Button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className='col-sm-2 part3 d-flex align-items-center'>
                        <div className='phNo d-flex align-items-center ml-auto'>
                            <span><HeadsetMicOutlinedIcon /></span>
                            <div className='info ml-3'>
                                <h3 className='text-g mb-0'>1900 - 888</h3>
                                <p className='mb-0'>24/7 Support Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav