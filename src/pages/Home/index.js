import React from 'react'
import Slider from 'react-slick'
import SliderBanner from './slider/index'
import CatSlider from '../../components/catSlider/index'
import Banner from '../../components/banner/index'
import './style.css'
import Deals from '../../components/deals'
import Trend from '../../components/trending'
import Product from '../../components/product'
import Button from '@mui/material/Button';
import BigBanner from '../../components/bigBanner/index'
import Footer1 from '../../components/footer/footer1'
import Footer from '../../components/footer/footer'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay: 2000
    }

    return (
        <>
            <SliderBanner />
            <CatSlider />
            <Banner />


            <section className='homeProducts'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <h2 className='hd mb-0 mt-0'>Popular Products</h2>
                        <ul className='list list-inline ml-auto filterTab mb-0'>
                            <li className='list-inline-item'>
                                <a className='cursor'>All</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Milks & Dairies</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Coffes & Teas</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Meats</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Vegetables</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Fruits</a>
                            </li>
                        </ul>
                    </div>

                    <div className='row productRow'>
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
                </div>
            </section>



            <section className='homeProducts homeProductsRow2 pt-0 mb-3'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <h2 className='hd mb-0 mt-0'> Daily Best Sells</h2>
                        <ul className='list list-inline ml-auto filterTab mb-0'>
                            <li className='list-inline-item'>
                                <a className='cursor'>Featured</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Popular</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Newly Added</a>
                            </li>
                        </ul>
                    </div>

                    <div className='row'>

                        <div className='col-md-3'>
                            <br />
                            <div className='box'>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-4.png' alt='' className='w-100' />
                                <h4>Bring nature into your home</h4>
                                <Button>Shop Now &nbsp; <ArrowForwardIcon /></Button>
                            </div>
                        </div>

                        <div className='col-md-9'>
                            <Slider {...settings} className='prodSlider'>
                                <div className='item'>
                                    <Product tag="hot" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg" />
                                </div>
                                <div className='item'>
                                    <Product tag="sale" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg" />
                                </div>
                                <div className='item'>
                                    <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-2.jpg" />
                                </div>
                                <div className='item'>
                                    <Product tag="hot" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg" />
                                </div>
                                <div className='item'>
                                    <Product tag="best" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-2.jpg" />
                                </div>
                                <div className='item'>
                                    <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-2.jpg" />
                                </div>

                            </Slider>
                        </div>
                    </div>

                </div>
            </section>

            <Deals />
            <Trend />
            <BigBanner />
            <Footer1 />
            <Footer />
        </>
    )
}

export default Home


