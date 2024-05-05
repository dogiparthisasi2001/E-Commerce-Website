import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Sidebar from '../../components/Sidebar/index'
import Product from '../../components/product/index'
import Button from '@mui/material/Button';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Footer from '../../components/footer/footer'
import CloseIcon from '@mui/icons-material/Close';


const Listing = () => {

    const [isOpenDropDown, setIsOpenDropDown] = useState(false)
    const [isOpenDropDown2, setIsOpenDropDown2] = useState(false)

    return (
        <>
            <section className='listingPage'>
                <div className='container-fluid'>
                    <div className='breadCrumb flex-column'>
                        <h2>Snack</h2>
                        <ul className='list list-inline'>
                            <li className='list-inline-item home'>
                                <Link to="/"><HomeOutlinedIcon /> &nbsp; Home</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to=""><KeyboardArrowRightIcon /></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="">Shop</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to=""><KeyboardArrowRightIcon /></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="">Snack</Link>
                            </li>
                        </ul>
                        <div className='bread_crumb'>
                            <ul className='list list-inline'>
                                <li className='list-inline-item'>
                                    <Button><CloseIcon /> &nbsp; Cabbage</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><CloseIcon /> &nbsp; Broccoli</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><CloseIcon /> &nbsp; Artichoke</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><CloseIcon /> &nbsp; Celery</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><CloseIcon /> &nbsp; Spinach</Button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='listingData'>
                        <div className='row'>
                            <div className='col-md-3 sidebarWrapper'>
                                <Sidebar />
                            </div>

                            <div className='col-md-9 rightContent homeProducts pt-0 mt-0 mb-0'>

                                <div className='topStrip d-flex align-items-center'>
                                    <p className='mb-0 pl-4'>We found <span style={{ color: '#3bb77e' }}>29</span> items for you!</p>
                                    <div className='ml-auto d-flex align-items-center'>
                                        <div className='tab_ position-relative'>
                                            <Button className='btn_' onClick={() => setIsOpenDropDown(!isOpenDropDown)}><GridViewOutlinedIcon /> &nbsp; Show: 50 &nbsp; &nbsp; <KeyboardArrowDownOutlinedIcon /></Button>
                                            {
                                                isOpenDropDown !== false &&
                                                <ul className='listingDropdown'>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>50</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>100</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>150</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>200</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>All</Button></li>
                                                </ul>
                                            }


                                        </div>
                                        <div className='tab_ ml-3 position-relative'>
                                            <Button className='btn_' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}><AutoAwesomeMosaicOutlinedIcon /> &nbsp; Sort By: Featured &nbsp; &nbsp; <KeyboardArrowDownOutlinedIcon /></Button>
                                            {
                                                isOpenDropDown2 !== false &&
                                                <ul className='listingDropdown'>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>Featured</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>Price: Low to High</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>Price: High to Low</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>Release Date</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>Avg. Rating</Button></li>
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className='productRow pl-4'>
                                    <div className='item'>
                                        <Product tag="hot" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="sale" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="new" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="best" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="hot" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="sale" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="best" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="hot" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="sale" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="new" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="best" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="hot" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="sale" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="best" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="hot" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="sale" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="new" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="best" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="hot" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="sale" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="best" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="hot" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="sale" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="new" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="best" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="hot" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="sale" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product tag="best" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-2.jpg" />
                                    </div>
                                    <div className='item'>
                                        <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-2.jpg" />
                                    </div>
                                </div>

                                <div className='pagination'>
                                    <Stack spacing={2}>
                                        <Pagination count={10} />
                                    </Stack>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    )
}

export default Listing