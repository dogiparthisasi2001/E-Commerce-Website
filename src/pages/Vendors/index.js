import React from 'react'
import './style.css'
import Vendor from '../../components/vendor/index'
import Footer from '../../components/footer/footer'

const Vendors = () => {

    return (
        <>
            <div className='vendorPage'>
                <div className='container-fluid'>
                    <div className='head'>
                        <h1>Vendors Page</h1>
                        <div className='search'>
                            <input type='text' placeholder='Search for items...' />
                        </div>
                    </div>

                    <div className='row vendorRow mt-5'>
                        <div className='vendor'>
                            <Vendor tag="mall" name='Nature Food' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-1.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor tag="preferred" name='Country Crock' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-7.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor name='Hambger Hel' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-2.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor tag="mall" name='Totinos Pizza' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-8.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor name='Maruchan Ramen' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-9.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor tag="preferred" name='USA Noodle Soup' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-3.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor tag="mall" name='Snyders-Lance' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-10.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor name='Red Baron Pizza' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-4.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor tag="preferred" name='Mrs. Smiths Pie' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-11.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor tag="preferred" name='Dove Promises' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-5.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor tag="mall" name='Mrs. Dash' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-12.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor tag="mall" name='Lindt Grocery A1' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-6.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor name='Snyders-Lance' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-14.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor tag="preferred" name='Wonderful' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-13.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor name='Almonds' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-1.png' />
                        </div>
                        <div className='vendor'>
                            <Vendor tag="mall" name='Pistachios' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-7.png' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Vendors