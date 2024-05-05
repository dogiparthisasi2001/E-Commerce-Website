import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Blog = (props) => {
    return(
        <>
            <div className='blogThumb'>
                <img src={props.img} alt='' />
                <div className='blogInfo'>
                    <span className='d-block mt-4 catName'>{props.cat}</span>
                    <p className='mt-2'><Link>{props.name}</Link></p>
                    <p className='date'>25 April 2022 . 126k Views . 4 mins read</p>
                </div>
            </div>
        </>
    )
}

export default Blog