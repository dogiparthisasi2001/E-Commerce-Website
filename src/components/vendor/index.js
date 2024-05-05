import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';


const Vendor = (props) => {
    return (
        <>
            <div className='vendorThumb'>
                {
                    props.tag !== null && props.tag !== undefined &&
                    <span className={`badge ${props.tag}`}>{props.tag}</span>
                }
                <img src={props.img} alt='' />
                <div className='vendorInfo'>
                    <span className='d-block mt-4 catName'>Since 2012</span>
                    <div className='d-flex align-items-center'>
                        <div className='mt-3'>
                            <p className='title mb-0'><Link>{props.name}</Link></p>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} size='small' className='mt-2' readOnly />
                        </div>
                        <Button className='ml-auto num'>180 Products</Button>
                    </div>
                    <p className='vendorIcon mt-3'><LocationOnOutlinedIcon /> &nbsp; Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                    <p className='vendorIcon'><HeadsetMicOutlinedIcon /> &nbsp; Call Us:(+91) - 540-025-124553</p>

                    <Button className='bg-g visit mt-3'>Visit Store &nbsp; <ArrowForwardIcon /></Button>
                </div>
            </div>
        </>
    )
}

export default Vendor