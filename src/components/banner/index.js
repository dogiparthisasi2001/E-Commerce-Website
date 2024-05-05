import React from 'react'
import Banner1 from '../../assets/images/banner-1.png'
import Banner2 from '../../assets/images/banner-2.png'
import Banner3 from '../../assets/images/banner-3.png'
import Button from '@mui/material/Button';
import './style.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Banner = () => {
    return (
        <div className='bannerSection'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='box'>
                            <img src={Banner1} alt='' className='w-100 transition' />
                            <h5>Everyday Fresh & Clean with our Products</h5>
                            <Button>Shop Now &nbsp; <ArrowForwardIcon /></Button>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='box'>
                            <img src={Banner2} alt='' className='w-100 transition' />
                            <h5>Make your Breakfast Healthy and Easy</h5>
                            <Button>Shop Now &nbsp; <ArrowForwardIcon /></Button>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='box'>
                            <img src={Banner3} alt='' className='w-100 transition' />
                            <h5>The best organic Products Online</h5>
                            <Button>Shop Now &nbsp; <ArrowForwardIcon /></Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner