import React, { useState, useEffect, useRef } from 'react'
import './header.css'
import Logo from '../../assets/images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconCompare from '../../assets/images/icon-compare.svg'
import IconHeart from '../../assets/images/icon-heart.svg'
import IconCart from '../../assets/images/icon-cart.svg'
import IconUser from '../../assets/images/icon-user.svg'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Nav from './nav/nav'
import Img1 from '../../assets/images/thumbnail-1.jpg'
import Img2 from '../../assets/images/thumbnail-2.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


import Button from '@mui/material/Button';

const Header = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isOpenSearch, setOpenSearch] = useState(false)

    const [isOpenDropDown, setIsOpenDropDown] = useState(false)
    const headerRef = useRef()
    const searchInput = useRef()

    const [categories, setCategories] = useState([
        'Milks and Dairies',
        'Wines & Drinks',
        'Clothing & Beauty',
        'Fresh Seafood',
        'Pet Foods & Toy',
        'Fast Food',
        'Baking Material',
        'Vegetables',
        'Fresh Fruits',
        'Bread & Juice',
        'Milks & Dairies',
        'Wines & Drinks',
        'Clothing & Beauty',
        'Fresh Seafood'
    ])

    const countryList = []

    useEffect(() => {
        getCountry('https://countriesnow.space/api/v0.1/countries/')
    })

    useEffect(() => {

    })

    const openSearch = () => {
        setOpenSearch(true)
        searchInput.current.focus()
    }

    const closeSearch = () => {
        setOpenSearch(false)
        searchInput.current.blur()
        searchInput.current.value = ''
    }

    const getCountry = async (url) => {
        try {
            await axios.get(url).then((resp) => {
                if (resp !== null) {
                    resp.data.data.map((item, index) => {
                        return (
                            countryList.push(item.country)
                        )
                    })
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let position = window.pageYOffset
            if (position > 100) {
                headerRef.current.classList.add('fixed')
            } else {
                headerRef.current.classList.remove('fixed')
            }
        })
    }, [])

    return (
        <>
            <div className='headerWrapper' ref={headerRef}>
                <header>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-2 part1 d-flex align-items-center'>
                                <img src={Logo} style={{ width: 200, height: 50 }} alt='' />
                                {
                                    windowWidth < 992 &&
                                    <div className='ml-auto d-flex align-items-center'>
                                        {
                                            windowWidth < 992 &&
                                            <div className='countryWrapper mr-2'>
                                                <Select data={countryList} placeholder={"Your Location"} icon=
                                                    {<LocationOnOutlinedIcon style={{ opacity: '0.5' }} />} />
                                            </div>
                                        }
                                        <div className='navbarToggle mr-1' onClick={openSearch}><SearchIcon /></div>
                                        <div className='navbarToggle mr-3'><MenuIcon /></div>
                                        {
                                            
                                        }
                                        <div className='myAccDrop'><PersonOutlineOutlinedIcon /></div>
                                    </div>
                                }

                            </div>

                            <div className='col-sm-4 part2'>
                                <div className={`headerSearch d-flex align-items-center ${isOpenSearch === true ? 'open' : ''}`}>
                                    {
                                        windowWidth < 992 && <div className='closeSearch' onClick={closeSearch}><ArrowBackIosOutlinedIcon /></div>
                                    }
                                    <Select data={categories} placeholder={'All Categories'} icon={false} />

                                    <div className='search'>
                                        <input type='text' placeholder='Search for items...' ref={searchInput} />
                                        <SearchIcon className="searchIcon cursor" />
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-6 d-flex align-items-center part3'>
                                <div className='ml-auto d-flex align-items-center'>
                                    <div className='countryWrapper'>
                                        <Select data={countryList} placeholder={"Your Location"} icon=
                                            {<LocationOnOutlinedIcon style={{ opacity: '0.5' }} />} />
                                    </div>

                                    <ClickAwayListener onClickAway={() => setIsOpenDropDown(false)}>
                                        <ul className='list list-inline mb-0 headerTabs'>
                                            <li className='list-inline-item'>
                                                <span>
                                                    <img src={IconCompare} alt='' />
                                                    <span className='badge bg-success rounded-circle'>3</span>
                                                    Compare
                                                </span>
                                            </li>
                                            <li className='list-inline-item account'>
                                                <Link to="/wishlist">
                                                    <span>
                                                        <img src={IconHeart} alt='' />
                                                        <span className='badge bg-success rounded-circle'>6</span>
                                                        Wishlist
                                                    </span></Link>
                                            </li>
                                            <li className='list-inline-item cart'>
                                                <Link to="/cart">
                                                    <span>
                                                        <img src={IconCart} alt='' />
                                                        <span className='badge bg-success rounded-circle'>2</span>
                                                        Cart
                                                    </span>
                                                </Link>
                                                <div className='cartList'>
                                                    <div className='cartItem d-flex align-items-center'>
                                                        <div className="mt-3">
                                                            <img src={Img1} alt='' />
                                                        </div>
                                                        <div className='imgInfo'>
                                                            <Link to="">Carrots</Link>
                                                            <h6> 1 X $800</h6>
                                                        </div>
                                                    </div>
                                                    <div className='cartItem d-flex align-items-center'>
                                                        <div className='img'>
                                                            <img src={Img2} alt='' />
                                                        </div>
                                                        <div className='imgInfo'>
                                                            <Link to="">Capsicum</Link>
                                                            <h6> 1 X $3200</h6>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className='d-flex total pt-0 align-items-center'>
                                                        <h5>Total</h5>
                                                        <h4 className='ml-auto'>$4000</h4>
                                                    </div>
                                                    <div className='d-flex pb-3 total align-items-center'>
                                                        <Button>View Cart</Button>
                                                        <Button className='ml-auto'>Checkout</Button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='list-inline-item account'>

                                                <Link to="/account">
                                                    <span className='account' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
                                                        <img src={IconUser} alt='' />
                                                        Account
                                                    </span>
                                                </Link>

                                                <ul className='dropdownMenu'>
                                                    <li><Button><PersonOutlineIcon />My Account</Button></li>
                                                    <li><Button><LocationOnOutlinedIcon />Order Tracking</Button></li>
                                                    <li><Button><LocalOfferOutlinedIcon />My Voucher</Button></li>
                                                    <li><Button><FavoriteBorderOutlinedIcon />My Wishlist</Button></li>
                                                    <li><Button><SettingsOutlinedIcon />Setting</Button></li>
                                                    <li><Button><LogoutOutlinedIcon />Sign Out</Button></li>
                                                </ul>


                                            </li>
                                        </ul>
                                    </ClickAwayListener>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Nav />
            </div>

            <div className='afterHeader'></div>
        </>
    )
}

export default Header