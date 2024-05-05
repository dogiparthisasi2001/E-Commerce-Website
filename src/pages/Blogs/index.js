import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Sidebar from '../../components/Sidebar/index'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import Blog from '../../components/blog/index'
import Footer from '../../components/footer/footer'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Cat from '../../assets/images/category-1.svg'


const Blogs = () => {

    const [isOpenDropDown, setIsOpenDropDown] = useState(false)
    const [isOpenDropDown2, setIsOpenDropDown2] = useState(false)

    return (
        <>
            <div className='blogPage'>
                <div className='container-fluid'>
                    <div className='breadCrumb flex-column'>
                        <h2>Blogs & News</h2>
                        <ul className='list list-inline pt-3'>
                            <li className='list-inline-item home'>
                                <Link to="/"><HomeOutlinedIcon /> &nbsp; Home</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to=""><KeyboardArrowRightIcon /></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="">Blogs & News</Link>
                            </li>
                        </ul>
                        <div className='bread_crumb'>
                            <ul className='list list-inline'>
                                <li className='list-inline-item'>
                                    <Button><CloseIcon /> &nbsp; Shopping</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><CloseIcon /> &nbsp; Recipes</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><CloseIcon /> &nbsp; Kitchen</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><CloseIcon /> &nbsp; News</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><CloseIcon /> &nbsp; Food</Button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='blogData'>
                        <div className='row'>
                            <div className='col-md-3 sidebarWrapper'>
                                <Sidebar />
                            </div>
                            <div className='col-md-9 rightContent'>
                                <div className='topStrip d-flex align-items-center'>
                                    <div className='d-flex align-items-center blogLeft pl-5'>
                                        <img src={Cat} alt='' />
                                        <span className='rec pl-3'>Recipe Articles</span>
                                    </div>
                                    <div className='ml-auto d-flex align-items-center'>
                                        <div className='tab_ position-relative'>
                                            <Button className='btn_' onClick={() => setIsOpenDropDown(!isOpenDropDown)}><GridViewOutlinedIcon /> &nbsp; Show: 50 &nbsp; &nbsp; <KeyboardArrowDownOutlinedIcon /></Button>
                                            {
                                                isOpenDropDown !== false &&
                                                <ul className='listingDropdown'>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>50</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>100</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>150</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>200</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>All</Button></li>
                                                </ul>
                                            }


                                        </div>
                                        <div className='tab_ ml-3 position-relative'>
                                            <Button className='btn_' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}><AutoAwesomeMosaicOutlinedIcon /> &nbsp; Sort By: Featured &nbsp; &nbsp; <KeyboardArrowDownOutlinedIcon /></Button>
                                            {
                                                isOpenDropDown2 !== false &&
                                                <ul className='listingDropdown'>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>Featured</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>Price: Low to High</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>Price: High to Low</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>Release Date</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}>Avg. Rating</Button></li>
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className='row blogRow'>
                                    <div className='blogItem'>
                                        <Blog cat='Side Dish' name='Creamy Garlic Sun-Dried Tomato Pasta' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-1.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='Soups and Stews' name='Summer Quinoa Salad Jars with Lemon Dill' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-2.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='Salad' name='Caprese Chicken with Smashed Potatoes' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-3.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='Dessert' name='Harissa Chickpeas with Whipped Feta' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-4.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='Breakfast' name='Almond Butter Chocolate Chip Zucchini Bars' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-5.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='Vegan' name='Smoky Beans & Greens Tacos with Aji Verde' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-6.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='Gluten Free' name='Sticky Ginger Rice Bowls with Pickled Veg' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-7.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='Side Dish' name='Creamy Garlic Sun-Dried Tomato Pasta' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-8.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='Dairy Free' name='The Absolute Easiest Spinach and Pizza' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-9.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='salad' name='Sticky Ginger Rice Bowls with Pickled' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-10.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='soups' name='The Best Soft Chocolate Chip Cookies' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-11.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='vegetarian' name='Baked Mozzarella Chicken Rolls' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-12.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='dessert' name='The Best Avocado Egg Salad' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-13.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='gluten free' name='Summer Quinoa Salad Jars with Lemon Dill' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-14.png' />
                                    </div>
                                    <div className='blogItem'>
                                        <Blog cat='vegan' name='Almond Butter Chocolate Chip Zucchini Bars' img='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-15.png' />
                                    </div>
                                </div>

                                <div className='pagination'>
                                    <Stack spacing={2}>
                                        <Pagination count={10} />
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blogs