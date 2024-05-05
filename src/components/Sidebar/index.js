import React from 'react'
import Cat1 from '../../assets/images/category-1.svg'
import Cat2 from '../../assets/images/category-2.svg'
import Cat3 from '../../assets/images/category-3.svg'
import Cat4 from '../../assets/images/category-4.svg'
import Cat5 from '../../assets/images/category-5.svg'
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Banner from '../../assets/images/banner.png'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/thumbnail-1.jpg'
import img2 from '../../assets/images/thumbnail-2.jpg'
import img3 from '../../assets/images/thumbnail-3.jpg'
import Rating from '@mui/material/Rating';

function valuetext(value) {
    return `${value}°C`;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Sidebar = () => {

    const [value, setValue] = React.useState([20, 137]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className='sidebar'>
                <div className='card border-0'>
                    <h3>Category</h3>

                    <div className='cat_list'>
                        <div className='catItem d-flex align-items-center'>
                            <span className='img'><img src={Cat1} width={32} alt='' /></span>
                            <h5 className='mb-0 ml-3 mr-3'>Milks & Dairies</h5>
                            <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>30</span>
                        </div>
                    </div>
                    <div className='cat_list'>
                        <div className='catItem d-flex align-items-center'>
                            <span className='img'><img src={Cat2} width={32} alt='' /></span>
                            <h5 className='mb-0 ml-3 mr-3'>Clothing</h5>
                            <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>46</span>
                        </div>
                    </div>
                    <div className='cat_list'>
                        <div className='catItem d-flex align-items-center'>
                            <span className='img'><img src={Cat3} width={32} alt='' /></span>
                            <h5 className='mb-0 ml-3 mr-3'>Pet Foods</h5>
                            <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>9</span>
                        </div>
                    </div>
                    <div className='cat_list'>
                        <div className='catItem d-flex align-items-center'>
                            <span className='img'><img src={Cat4} width={32} alt='' /></span>
                            <h5 className='mb-0 ml-3 mr-3'>Baking Material</h5>
                            <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>13</span>
                        </div>
                    </div>
                    <div className='cat_list'>
                        <div className='catItem d-flex align-items-center'>
                            <span className='img'><img src={Cat5} width={32} alt='' /></span>
                            <h5 className='mb-0 ml-3 mr-3'>Fresh Fruit</h5>
                            <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>60</span>
                        </div>
                    </div>
                </div>

                <div className='card border-0'>
                    <h3>Fill By Price</h3>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        size="small"
                        min={0}
                        step={1}
                        max={1000}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        style={{ color: '#3bb77e' }}
                    />

                    <div className='d-flex pt-2 pb-2 priceRange'>
                        <span>From: <strong style={{ color: '#3bb77e' }}>${value[0]}</strong></span>
                        <span className='ml-auto'>To: <strong style={{ color: '#3bb77e' }}>${value[1]}</strong></span>
                    </div>

                    <div className='filters'>
                        <h5>Color</h5>
                        <ul>
                            <li><Checkbox {...label} style={{ color: '#3bb77e' }} />Red (56)</li>
                            <li><Checkbox {...label} style={{ color: '#3bb77e' }} />Green (78)</li>
                            <li><Checkbox {...label} style={{ color: '#3bb77e' }} />Blue (54)</li>
                        </ul>
                        <h5 className='mt-4'>Item Condition</h5>
                        <ul>
                            <li><Checkbox {...label} style={{ color: '#3bb77e' }} />New (56)</li>
                            <li><Checkbox {...label} style={{ color: '#3bb77e' }} />Refurbished (78)</li>
                            <li><Checkbox {...label} style={{ color: '#3bb77e' }} />Used (54)</li>
                        </ul>
                        <Button><FilterAltOutlinedIcon /> &nbsp; Filter</Button>
                    </div>
                </div>

                <div className='card border-0 newProd'>
                    <h3>New Products</h3>
                    <div className='items d-flex align-items-center'>
                        <div className='img'>
                            <Link to=""><img src={img1} className='w-100' alt='' /></Link>
                        </div>
                        <div className='info'>
                            <Link to=""><h5>Carrots</h5></Link>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                            <div className='d-flex align-items-center'>
                                <span className='price text-g font-weight-bold'>$28.85</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='items d-flex align-items-center'>
                        <div className='img'>
                            <Link to=""><img src={img2} className='w-100' alt='' /></Link>
                        </div>
                        <div className='info'>
                            <Link to=""><h5>Capsicum</h5></Link>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                            <div className='d-flex align-items-center'>
                                <span className='price text-g font-weight-bold'>$28.85</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='items d-flex align-items-center'>
                        <div className='img'>
                            <Link to=""><img src={img3} className='w-100' alt='' /></Link>
                        </div>
                        <div className='info'>
                            <Link to=""><h5>Mango Juice</h5></Link>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' className='mt-0' readOnly />
                            <div className='d-flex align-items-center'>
                                <span className='price text-g font-weight-bold'>$28.85</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='boxx'>
                    <img src={Banner} alt='' className='w-100 transition' />
                    <div className='innerBox'>
                        <p>Organic</p>
                        <h5>Save 17% on <span style={{ color: '#3bb77e' }}>Organic</span> Juice</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar