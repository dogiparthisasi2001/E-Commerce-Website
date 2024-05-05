import React from 'react'
import './style.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const CatSlider = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows: true,        
        autoplay: 2000,
        centerMode: true
    }

    return (
        <>
            <div className='catSliderSection'>
                <div className='container-fluid'>
                    <ul className='catList'>
                        <h2 className='hd'>Featured Categories</h2>
                        <li><Link to='/cakes'>Cake & Milk</Link></li>
                        <li><Link to='/coffee'>Coffees & Teas</Link></li>
                        <li><Link to='/meat'>Meat</Link></li>
                        <li><Link to='/vegetables'>Vegetables</Link></li>
                    </ul>
                    <Slider {...settings} className='cat_slider_main'>

                        <div className='item'>
                            <div className='info' style={{ backgroundColor: "#E3E1D9", borderRadius: '10%' }}>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt='' />
                                <h5>Burger</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        
                        <div className='item'>
                            <div className='info' style={{ backgroundColor: "#fddfef", borderRadius: '10%' }}>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png' alt='' />
                                <h5>Organic Kiwi</h5>
                                <p>28 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info' style={{ backgroundColor: "#E1F0DA", borderRadius: '10%' }}>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png' alt='' />
                                <h5>Peach</h5>
                                <p>14 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info' style={{ backgroundColor: "#F8E8EE", borderRadius: '10%' }}>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png' alt='' />
                                <h5>Red Apple</h5>
                                <p>54 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info' style={{ backgroundColor: "#EBE3D5", borderRadius: '10%' }}>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png' alt='' />
                                <h5>Snack</h5>
                                <p>56 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info' style={{ backgroundColor: "#D2E9E9", borderRadius: '10%' }}>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png' alt='' />
                                <h5>Vegetables</h5>
                                <p>72 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info' style={{ backgroundColor: "#E9FFC2", borderRadius: '10%' }}>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png' alt='' />
                                <h5>Strawberry</h5>
                                <p>36 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info' style={{ backgroundColor: "#D0E7D2", borderRadius: '10%' }}>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png' alt='' />
                                <h5>Black Plum</h5>
                                <p>123 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info' style={{ backgroundColor: "#FFF2F2", borderRadius: '10%' }}>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png' alt='' />
                                <h5>Custard Apple</h5>
                                <p>34 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info' style={{ backgroundColor: "#E9FFC2", borderRadius: '10%' }}>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png' alt='' />
                                <h5>Coffe & Tea</h5>
                                <p>89 items</p>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default CatSlider