import React from 'react'
import './style.css'
import '../Details/style.css'

const PurchaseGuide = () => {
    return (
        <>
            <div className='purchasePage'>
                <div className='container purchaseContainer'>
                    <div className='img'>
                        <h1>Purchase Guide</h1>
                        <p>By <span style={{ color: '#3bb77e' }}>John</span> * 9 April 2020 * 8 mins read * 29k Views</p>
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/page/guide-1.png' alt='' className='w-100' />
                    </div>
                    <div className='purchaseInfo'>
                        <h1 className='mt-5 mb-3'>1. Account Registering</h1>
                        <p>The registration confirmation is communicated promptly through a confirmation email, providing users with a secure link to verify their accounts.</p>
                        <ul style={{listStyleType: 'circle'}} className='pl-4'>
                            <li>Name (required)</li>
                            <li>Age (required)</li>
                            <li>Date of birth (required)</li>
                            <li>Passport/ ID no. (required)</li>
                            <li>Current career (required)</li>
                            <li>Mobile phone numbers (required)</li>
                            <li>Email address (required)</li>
                            <li>Hobbies & interests (optional)</li>
                            <li>Social profiles (optional)</li>
                        </ul>
                        <h1 className='mt-5 mb-3'>2. Select Product</h1>
                        <p>Dive into a world of endless possibilities as you explore our curated selection of high-quality products. From the latest trends to timeless classics, each item is meticulously chosen to cater to your diverse needs and preferences.</p>
                        <h1 className='mt-5 mb-3'>3. Confirm Order Content</h1>
                        <p>Here, you'll find a comprehensive summary of your chosen items, ensuring every detail aligns with your preferences before completing your purchase.</p>
                        <h1 className='mt-5 mb-3'>4.Transaction Completed</h1>
                        <p>Our commitment to your satisfaction doesn't end here. Should you have any questions, concerns, or require assistance at any stage of the post-purchase process, our dedicated customer support team is readily available to assist you. Feel free to reach out through our contact channels, and we'll be more than happy to help.</p>
                        <h1 className='mt-5 mb-3'>5. Accepted Credit Cards</h1>
                        <ul style={{listStyleType: 'circle'}} className='pl-4'>
                            <li>Visa</li>
                            <li>Mastercards</li>
                            <li>American Express</li>
                            <li>Discover</li>
                            <p>*Taxes are calculated by your local bank and location.</p>
                        </ul>
                        <h1 className='mt-5 mb-3'>6. Download and Setup</h1>
                        <ul style={{listStyleType: 'circle'}} className='pl-4'>
                            <li>Updated content on a regular basis</li>
                            <li>Secure & hassle-free payment</li>
                            <li>1-click checkout</li>
                            <li>Easy access & smart user dashboard</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PurchaseGuide