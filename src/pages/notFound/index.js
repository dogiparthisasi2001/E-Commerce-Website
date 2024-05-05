import React from 'react'
import './style.css'
import Page404 from '../../assets/images/page-404.png'
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <section className='notFound'>
                <div className='container-fluid'>
                    <div className='box'>
                        <img src={Page404} alt='' />
                        <br />
                        <h1>Page Not Found</h1>
                        <p>The link you clicked may be broken or the page may have been removed.</p>
                        <p>Visit the <span>Homepage</span> or <span>Contact Us</span> about the problem</p>
                        <Link to="/"><Button><HomeOutlinedIcon /> &nbsp; Back to Home Page</Button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound