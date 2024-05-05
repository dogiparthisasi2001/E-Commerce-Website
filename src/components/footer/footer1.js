import React from 'react'
import './footer.css'
import icon1 from '../../assets/images/icon-1.svg'
import icon2 from '../../assets/images/icon-2.svg'
import icon3 from '../../assets/images/icon-3.svg'
import icon4 from '../../assets/images/icon-4.svg'
import icon5 from '../../assets/images/icon-5.svg'

const Footer1 = () => {
    return (
        <>
            <div className='footerWrapper'>
                <div className='footerBoxes'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <div className='box d-flex w-100 align-items-center'>
                                    <span><img src={icon1} alt='' /></span>
                                    <div className='info'>
                                        <h5>Best prices & offers</h5>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='box d-flex w-100 align-items-center'>
                                    <span><img src={icon2} alt='' /></span>
                                    <div className='info'>
                                        <h5>Free delivery</h5>
                                        <p>24/7 amazing services</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='box d-flex w-100 align-items-center'>
                                    <span><img src={icon3} alt='' /></span>
                                    <div className='info'>
                                        <h5>Great daily deal</h5>
                                        <p>When you sign up</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='box d-flex w-100 align-items-center'>
                                    <span><img src={icon4} alt='' /></span>
                                    <div className='info'>
                                        <h5>Wide assortment</h5>
                                        <p>Mega Discounts</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='box d-flex w-100 align-items-center'>
                                    <span><img src={icon5} alt='' /></span>
                                    <div className='info'>
                                        <h5>Easy returns</h5>
                                        <p>Within 30 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer1