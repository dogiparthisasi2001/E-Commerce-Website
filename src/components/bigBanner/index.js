import React from 'react'
import './style.css'
import img2 from '../../assets/images/bigBanner-2.png'
import { Link } from 'react-router-dom'
import NewsLetter from '../newsLetter/index'

const BigBanner = () => {
    return (
        <div className='bigBannerSection'>
            <div className='container-fluid'>
                <div className='box d-flex align-items-center'>
                    <div className='info'>
                        <h2>Stay home & get your daily needs from our shop</h2>
                        <span className='brand d-block'>Start your Daily Shopping with <Link className='text-g'>Nest Mart</Link></span>
                        <NewsLetter />
                    </div>
                    <div className='img'>
                        <img src={img2} alt='' className='w-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigBanner