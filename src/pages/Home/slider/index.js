import React from 'react'
import Slider from 'react-slick'
import './index.css'
import Slide1 from '../../../assets/images/slider-1.png'
import Slide2 from '../../../assets/images/slider-2.png'

import NewsLetter from '../../../components/newsLetter'

const HomeSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true
    }

    return (
        <section className='homeSlider'>
            <div className='container-fluid position-relative'>
                <Slider {...settings} className='home_slider_main'>
                    <div className='item'>
                        <img src={Slide1} alt='' className='w-100' />
                        <div className='info'>
                            <h2 className="mb-4">
                                Don't miss amazing Grocery deals
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={Slide2} alt='' className='w-100' />
                        <div className='info'>
                            <h2 className="mb-4">
                                Fresh Vegetables Big discount
                            </h2>
                            <p>Save upto 50% off on your first order</p>
                        </div>
                    </div>
                </Slider>

                <NewsLetter />                

            </div>
        </section>
    )
}

export default HomeSlider