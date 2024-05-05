import React, { useRef, useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Slider from 'react-slick'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Footer from '../../components/footer/footer'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import Product from '../../components/product/index'

const DetailsPage = () => {

    const zoomSlider = useRef()
    const zoomSliderBig = useRef()

    const [zoomImage, setZoomImage] = useState('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg')

    const [bigImage, setBigImage] = useState([1500, 1500])
    const [smlImage, setSmlImage] = useState([150, 150])

    const [activeTabs, setActiveTabs] = useState(0)

    const [activeSize, setActiveSize] = useState(0)

    const [inputValue, setInputValue] = useState(1)

    const [cost, setCost] = useState(38)
    const [oldCost, setOldCost] = useState(52)

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    }

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    }

    var related = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    }

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index)
        zoomSliderBig.current.slickGoTo(index)
    }

    const isActive = (index) => {
        setActiveSize(index)
    }

    const plus = () => {
        setInputValue(inputValue + 1)
    }

    const minus = () => {
        if (inputValue !== 1) {
            setInputValue(inputValue - 1)
        }
    }

    useEffect(() => {
        setCost(inputValue * 38)
        setOldCost(inputValue * 52)
    }, [inputValue])

    return (
        <>
            <div className='detailsPage'>
                <div className='breadcrumbWrapper mb-4'>
                    <div className='container-fluid'>
                        <ul className="breadCrumb breadCrumb2">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                            <li><Link to="">Vegetables & Tubers</Link></li>
                            <li><Link to=""><KeyboardArrowRightIcon /></Link></li>
                            <li>Seeds of Change Organic</li>
                        </ul>
                    </div>
                </div>

                <div className='container detailsContainer pb-5 pt-3'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <div className='productZoom'>
                                <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={1} src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${bigImage[0]}, ${bigImage[1]})`} />
                                    </div>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={1} src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${bigImage[0]}, ${bigImage[1]})`} />
                                    </div>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={1} src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${bigImage[0]}, ${bigImage[1]})`} />
                                    </div>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={1} src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${bigImage[0]}, ${bigImage[1]})`} />
                                    </div>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={1} src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${bigImage[0]}, ${bigImage[1]})`} />
                                    </div>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={1} src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${bigImage[0]}, ${bigImage[1]})`} />
                                    </div>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={1} src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-7-202305292130.jpg?im=Resize=(${bigImage[0]}, ${bigImage[1]})`} />
                                    </div>
                                    <div className='item'>
                                        <InnerImageZoom zoomType="hover" zoomScale={1} src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-8-202305292130.jpg?im=Resize=(${bigImage[0]}, ${bigImage[1]})`} />
                                    </div>
                                </Slider>
                            </div>

                            <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                                <div className='item'>
                                    <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smlImage[0]}, ${smlImage[1]})`} alt='' className='w-100' onClick={() => goto(0)} />
                                </div>
                                <div className='item'>
                                    <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smlImage[0]}, ${smlImage[1]})`} alt='' className='w-100' onClick={() => goto(1)} />
                                </div>
                                <div className='item'>
                                    <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smlImage[0]}, ${smlImage[1]})`} alt='' className='w-100' onClick={() => goto(2)} />
                                </div>
                                <div className='item'>
                                    <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${smlImage[0]}, ${smlImage[1]})`} alt='' className='w-100' onClick={() => goto(3)} />
                                </div>
                                <div className='item'>
                                    <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${smlImage[0]}, ${smlImage[1]})`} alt='' className='w-100' onClick={() => goto(4)} />
                                </div>
                                <div className='item'>
                                    <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smlImage[0]}, ${smlImage[1]})`} alt='' className='w-100' onClick={() => goto(5)} />
                                </div>
                                <div className='item'>
                                    <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-7-202305292130.jpg?im=Resize=(${smlImage[0]}, ${smlImage[1]})`} alt='' className='w-100' onClick={() => goto(6)} />
                                </div>
                                <div className='item'>
                                    <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-8-202305292130.jpg?im=Resize=(${smlImage[0]}, ${smlImage[1]})`} alt='' className='w-100' onClick={() => goto(7)} />
                                </div>
                            </Slider>
                        </div>

                        <div className='col-md-7 productInfo'>
                            <h1>Maggi 2-Minute Masala Noodles 70 g</h1>
                            <div className='d-flex align-items-center'>
                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} className='mt-0' readOnly />
                                <span className='textLight'>(32 reviews)</span>
                            </div>

                            <div className='priceSection d-flex align-items-center'>
                                <span className='text-g priceLarge'>${cost}</span>
                                <div className='ml-2 d-flex flex-column'>
                                    <span className='text-org'>25% off</span>
                                    <span className='textLight'>${oldCost}</span>
                                </div>
                            </div>
                            <p>With Maggi you can cook the best meal for you and your loved ones, using a range of products that add greater flavor to everyday favorites – bringing out the best in fresh ingredients to deliver great taste in a simple way.</p>
                            <p>Maggi products are known for their convenience, it's essential for consumers to be mindful of their nutritional content. Maggi has introduced variations with a focus on health, offering options with reduced sodium and added nutritional elements.</p>

                            <div className='productSize d-flex align-items-center'>
                                <span>Size / Weight: </span>
                                <ul className='list list-inline mb-0'>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>70gm</a></li>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>100gm</a></li>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>150gm</a></li>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>200gm</a></li>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={() => isActive(4)}>250gm</a></li>
                                </ul>
                            </div>

                            <div className='addCartSection pt-4 pb-4 d-flex align-items-center'>
                                <div className='counter'>
                                    <input type='number' value={inputValue} />
                                    <span className='arrow plus' onClick={plus}><KeyboardArrowUpIcon /></span>
                                    <span className='arrow minus' onClick={minus}><KeyboardArrowDownIcon /></span>
                                </div>

                                <Button className='cartButton'><ShoppingCartOutlinedIcon /> &nbsp; Add to Cart</Button>
                                <Button className='icon'><FavoriteBorderOutlinedIcon /></Button>
                                <Button className='icon'><CompareArrowsOutlinedIcon /></Button>
                            </div>
                        </div>
                    </div>

                    <div className='card mt-5 p-5 detailsPageTabs'>
                        <div className='customTabs mb-4'>
                            <ul className='list list-inline'>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => setActiveTabs(0)}>Description</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => setActiveTabs(1)}>Additional Info</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => setActiveTabs(2)}>Vendor</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 3 && 'active'}`} onClick={() => setActiveTabs(3)}>Reviews (3)</Button>
                                </li>
                            </ul>
                        </div>

                        {
                            activeTabs === 0 &&

                            <div className='tabContent'>
                                <p>Brand MAGGI has started “Simply Good” initiative, in line with Nestlé’s global commitment which is firmly embedded in our Purpose and Values which is to enhance quality of life and contribute to a healthier future.  In India the Simply Good journey has started with everyone’s favourite MAGGI 2-Minute Masala Noodles fortified with iron which will now provide consumers 15% of their daily Iron requirement.</p>
                                <p>MAGGI Noodles is a part of about 70% urban Indian households and with more than 2.5 Bio serves that are consumed by people every year (2x Indian population) it can be an ideal carrier for iron fortification and thus contribute to closing the gap of Iron deficiency.</p>

                                <h3 className='mt-5 mb-3'>Packaging & Delivery</h3>
                                <p>Our packaging process is meticulous, ensuring that each Maggi item is securely wrapped to prevent any breakage or damage during transit. We adhere to strict quality standards, guaranteeing that the Maggi products you receive are fresh and of the highest quality. Committed to sustainability, we use eco-friendly packaging materials to minimize our environmental impact.</p>
                                <p>When it comes to delivery, we partner with reliable shipping services to bring your Maggi cravings straight to your doorstep. Upon dispatch, you will receive a tracking number, allowing you to monitor the real-time progress of your order. Our goal is to provide a fast and reliable delivery experience, dispatching orders promptly to ensure your Maggi products reach you in the shortest possible time.</p>

                                <h3 className='mt-5 mb-3'>Suggested to Use</h3>
                                <p>Use it as a marinade for meats, a dipping sauce for snacks, or a flavorful addition to stir-fries.</p>
                                <p>Follow the suggested measurements on the packaging for a perfectly balanced flavor profile.</p>

                                <h3 className='mt-5 mb-3'>Other Ingredients</h3>
                                <p>Spices and Seasonings</p>
                                <p>Preservatives, Natural Flavors, Color Additives</p>
                                <p>Emulsifiers and Stabilizers</p>

                                <h3 className='mt-5 mb-3'>Warnings</h3>
                                <p>Before consuming Maggi products, check the expiration date on the packaging. Do not consume products that have passed their expiration date.</p>
                            </div>

                        }

                        {
                            activeTabs === 1 &&

                            <div className='tabContent'>
                                <div className='table-responsive'>
                                    <table className='table table-bordered'>
                                        <tbody>
                                            <tr class="stand-up">
                                                <th>Stand Up</th>
                                                <td>
                                                    <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                </td>
                                            </tr>
                                            <tr class="folded-wo-wheels">
                                                <th>Folded (w/o wheels)</th>
                                                <td>
                                                    <p>32.5″L x 18.5″W x 16.5″H</p>
                                                </td>
                                            </tr>
                                            <tr class="folded-w-wheels">
                                                <th>Folded (w/ wheels)</th>
                                                <td>
                                                    <p>32.5″L x 24″W x 18.5″H</p>
                                                </td>
                                            </tr>
                                            <tr class="door-pass-through">
                                                <th>Door Pass Through</th>
                                                <td>
                                                    <p>24</p>
                                                </td>
                                            </tr>
                                            <tr class="frame">
                                                <th>Frame</th>
                                                <td>
                                                    <p>Aluminum</p>
                                                </td>
                                            </tr>
                                            <tr class="weight-wo-wheels">
                                                <th>Weight (w/o wheels)</th>
                                                <td>
                                                    <p>20 LBS</p>
                                                </td>
                                            </tr>
                                            <tr class="weight-capacity">
                                                <th>Weight Capacity</th>
                                                <td>
                                                    <p>60 LBS</p>
                                                </td>
                                            </tr>
                                            <tr class="width">
                                                <th>Width</th>
                                                <td>
                                                    <p>24″</p>
                                                </td>
                                            </tr>
                                            <tr class="handle-height-ground-to-handle">
                                                <th>Handle height (ground to handle)</th>
                                                <td>
                                                    <p>37-45″</p>
                                                </td>
                                            </tr>
                                            <tr class="wheels">
                                                <th>Wheels</th>
                                                <td>
                                                    <p>12″ air / wide track slick tread</p>
                                                </td>
                                            </tr>
                                            <tr class="seat-back-height">
                                                <th>Seat back height</th>
                                                <td>
                                                    <p>21.5″</p>
                                                </td>
                                            </tr>
                                            <tr class="head-room-inside-canopy">
                                                <th>Head room (inside canopy)</th>
                                                <td>
                                                    <p>25″</p>
                                                </td>
                                            </tr>
                                            <tr class="pa_color">
                                                <th>Color</th>
                                                <td>
                                                    <p>Black, Blue, Red, White</p>
                                                </td>
                                            </tr>
                                            <tr class="pa_size">
                                                <th>Size</th>
                                                <td>
                                                    <p>M, S</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        }

                        {
                            activeTabs === 2 &&

                            <div className='tabContent'>
                                <div className='row mb-5 mt-3'>
                                    <div className='col-md-auto'>
                                        <span><img src='https://www.mdgllc.net/wp-content/uploads/2018/11/noodles-and-company-logo-png-transparent.png' alt='' style={{ width: 200, height: 70 }} /></span>
                                    </div>
                                    <div className='col'>
                                        <h2 className='text-g'>Noodles Co.</h2>
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} size='small' className='mt-0' readOnly />
                                    </div>
                                </div>

                                <p className='pt-4'><LocationOnOutlinedIcon /> &nbsp; <b>Address:</b> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                                <p className='pb-4'><HeadsetMicOutlinedIcon /> &nbsp; <b>Call Us:</b> (+91) - 540-025-124553</p>

                                <hr />

                                <p className='pt-3'>Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.</p>

                            </div>
                        }

                        {
                            activeTabs === 3 &&

                            <div classNanme='tabContent'>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <h3 className='mb-5'>Customer Questions & Answers</h3>
                                        <div className='card p-3 reviewsCard flex-row'>
                                            <div className='image'>
                                                <div className='rounded-circle'>
                                                    <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-0.jpg' alt='' />
                                                </div>
                                                <span className='text-g d-flex align-items-center font-weight-bold'>Sienna</span>
                                            </div>

                                            <div className='info pl-4'>
                                                <div className='d-flex align-items-center'>
                                                    <h6 className='textLight'>December 4, 2022 at 3:12 pm</h6>
                                                    <div className='ml-auto'>
                                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} size='small' className='mt-0' readOnly />
                                                    </div>
                                                </div>
                                                <p>Maggi noodles have been my go-to comfort food for years, and the classic flavor never disappoints! Quick to prepare and always satisfying. Perfect for a busy day or lazy evening. Highly recommend!</p>
                                            </div>
                                        </div>

                                        <div className='card p-3 reviewsCard flex-row'>
                                            <div className='image'>
                                                <div className='rounded-circle'>
                                                    <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-0.jpg' alt='' />
                                                </div>
                                                <span className='text-g d-flex align-items-center font-weight-bold'>Brenna</span>
                                            </div>

                                            <div className='info pl-4'>
                                                <div className='d-flex align-items-center'>
                                                    <h6 className='textLight'>December 4, 2022 at 3:12 pm</h6>
                                                    <div className='ml-auto'>
                                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} size='small' className='mt-0' readOnly />
                                                    </div>
                                                </div>
                                                <p>The Maggi Masala Mix for Chicken Curry is a game-changer! It brings an authentic taste to homemade curries. The blend of spices is spot-on, and it saves so much time. I can now enjoy restaurant-style chicken curry at home!</p>
                                            </div>
                                        </div>

                                        <div className='card p-3 reviewsCard flex-row'>
                                            <div className='image'>
                                                <div className='rounded-circle'>
                                                    <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-0.jpg' alt='' />
                                                </div>
                                                <span className='text-g d-flex align-items-center font-weight-bold'>Gemma</span>
                                            </div>

                                            <div className='info pl-4'>
                                                <div className='d-flex align-items-center'>
                                                    <h6 className='textLight'>December 4, 2022 at 3:12 pm</h6>
                                                    <div className='ml-auto'>
                                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} size='small' className='mt-0' readOnly />
                                                    </div>
                                                </div>
                                                <p>I tried the Maggi Ready-to-Cook Vegetable Biryani, and it exceeded my expectations! The flavors are authentic, and it's so easy to prepare. A great solution for a quick and delicious meal. Will definitely order again!</p>
                                            </div>
                                        </div>

                                        <form className='reviewForm'>
                                            <h3 className='mt-5'>Add a Review</h3>
                                            <Rating name="half-rating-read" defaultValue={0.0} precision={0.5} className='mt-0' />
                                            <div className='mt-3 form-group'>
                                                <textarea placeholder='Write Comment' className='form-control'></textarea>
                                            </div>

                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='mt-3 form-group'>
                                                        <input type='text' placeholder='Name' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='mt-3 form-group'>
                                                        <input type='text' placeholder='Email' className='form-control' />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mt-3 form-group'>
                                                <input type='text' placeholder='Website' className='form-control' />
                                            </div>

                                            <Button className='mt-3'>Submit Review</Button>
                                        </form>
                                    </div>

                                    <div className='col-md-4 pl-5'>
                                        <h3>Customer Reviews</h3>
                                        <div className='d-flex mt-4 mb-4 align-items-center'>
                                            <Rating name="half-rating-read" size='small' defaultValue={4.0} precision={0.5} className='mt-0' readOnly />
                                            <strong className='ml-3'>4.0 out of 5</strong>
                                        </div>

                                        <div className='d-flex align-items-center progressBarBox'>
                                            <span className='mr-3'>5 Star</span>
                                            <div class="progress" style={{ width: '80%', height: '20px' }}>
                                                <div class="progress-bar" style={{ width: '75%', height: '20px' }}>75%</div>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center progressBarBox'>
                                            <span className='mr-3'>4 Star</span>
                                            <div class="progress" style={{ width: '80%', height: '20px' }}>
                                                <div class="progress-bar" style={{ width: '50%', height: '20px' }}>50%</div>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center progressBarBox'>
                                            <span className='mr-3'>3 Star</span>
                                            <div class="progress" style={{ width: '80%', height: '20px' }}>
                                                <div class="progress-bar" style={{ width: '65%', height: '20px' }}>65%</div>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center progressBarBox'>
                                            <span className='mr-3'>2 Star</span>
                                            <div class="progress" style={{ width: '80%', height: '20px' }}>
                                                <div class="progress-bar" style={{ width: '25%', height: '20px' }}>25%</div>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center progressBarBox'>
                                            <span className='mr-3'>1 Star</span>
                                            <div class="progress" style={{ width: '80%', height: '20px' }}>
                                                <div class="progress-bar" style={{ width: '85%', height: '20px' }}>85%</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <p className='mt-3'>How are Ratings Calculated ?</p>
                                    </div>

                                </div>
                            </div>
                        }


                    </div>

                    <div className='relatedProducts pt-5 pb-5'>
                        <h3>Related Products</h3>
                        <Slider {...related} className='prodSlider mt-4'>
                            <div className='item'>
                                <Product tag="hot" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg" />
                            </div>
                            <div className='item'>
                                <Product tag="sale" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg" />
                            </div>
                            <div className='item'>
                                <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-2.jpg" />
                            </div>
                            <div className='item'>
                                <Product tag="hot" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg" />
                            </div>
                            <div className='item'>
                                <Product tag="best" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-2.jpg" />
                            </div>
                            <div className='item'>
                                <Product image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg" hoveredImage="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-2.jpg" />
                            </div>

                        </Slider>
                    </div>

                </div>
            </div>

            
            <Footer />
        </>
    )
}

export default DetailsPage