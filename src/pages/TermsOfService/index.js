import React from 'react'
import './style.css'
import '../Details/style.css'
import { Link } from 'react-router-dom'

const TermsOfService = () => {
    return(
        <>
            <div className='termsPage'>
                <div className='container termsContainer'>
                    <h1>Terms Of Service</h1>
                    <p>By <span style={{ color: '#3bb77e' }}>John</span> * 9 April 2020 * 8 mins read * 29k Views</p>
                    <div className='termsInfo mt-5'>
                        <p>Please read these Terms of Service (“Terms”, “Terms of Service”) carefully before using the https://Evara.com website (the “Service”) operated by Evara (“us”, “we”, or “our”).</p>
                        <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
                        <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

                        <h4>Rights & restrictions</h4>
                        <ol style={{listStyleType: 'number'}} className='pl-4'>
                            <li className='pt-3'>Members must be at least 18 years of age.</li>
                            <li className='pt-3'>Members are granted a time-limited, non-exclusive, revocable, nontransferable, and non-sublicensable right to access that portion of the online course corresponding to the purchase.</li>
                            <li className='pt-3'>The portion of the online course corresponding to the purchase will be available to the Member as long as the course is maintained by the Company, which will be a minimum of one year after Member’s purchase.</li>
                            <li className='pt-3'>The videos in the course are provided as a video stream and are not downloadable.</li>
                            <li className='pt-3'>By agreeing to grant such access, the Company does not obligate itself to maintain the course, or to maintain it in its present form.</li>
                        </ol>

                        <h4>Links To Other Web Sites</h4>
                        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Evara.</p>
                        <p>Evara has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Evara shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                        <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>

                        <h4>Termination</h4>
                        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                        <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>

                        <h4>Changes</h4>
                        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                        <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

                        <h4>Contact Us</h4>
                        <p>If you have any questions about these Terms, please <Link to="/contact">contact us</Link>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TermsOfService