import React, { useState } from 'react';
import './style.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Tooltip from '@mui/material/Tooltip';


const Product = (props) => {

    const [isHovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    return (
        <div className='productThumb'>

            {
                props.tag!==null && props.tag!==undefined && 
                <span className={`badge ${props.tag}`}>{props.tag}</span>
            }            

            <Link>
                <div className='imageWrapper' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={isHovered ? props.hoveredImage : props.image } className='w-100' alt='' />
                    <div className='overlay transition'>
                        <ul className='list list-inline mb-0'>
                            <li className='list-inline-item'>
                                <Tooltip title="Add to Wishlist" placement="top" arrow>
                                    <a className='cursor'><FavoriteBorderOutlinedIcon /></a>
                                </Tooltip>
                            </li>
                            <li className='list-inline-item'>
                                <Tooltip title="Compare" placement="top" arrow>
                                    <a className='cursor'><CompareArrowsOutlinedIcon /></a>
                                </Tooltip>
                            </li>
                            <li className='list-inline-item'>
                                <Tooltip title="Quick View" placement="top" arrow>
                                    <a className='cursor'><VisibilityOutlinedIcon /></a>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </Link>

            <div className='info'>
                <span className='d-block catName'>Snack</span>
                <p className='title'><Link>Seeds of Change Organic Quinoa, Brown & Red Rice</Link></p>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} size='small' className='mt-0' readOnly />
                <span className='brand d-block'>By  <Link className='text-g'>Nest Food</Link></span>
                <div className='d-flex align-items-center mt-3'>
                    <div className='d-flex align-items-center'>
                        <span className='price text-g font-weight-bold'>$28.85</span><span className='oldPrice'>$32.8</span>
                    </div>
                    <Button className='bg-g ml-auto'><ShoppingCartOutlinedIcon /> Add</Button>
                </div>
            </div>
        </div>
    )
}

export default Product