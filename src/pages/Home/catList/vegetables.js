import React from 'react'
import './style.css'

const Vegetables = () => {
    return (
        <>
            <div className='container-fluid dd'>
                <div className='r'>Vegetables</div>
                <div className='row'>
                    <div className='col-sm-3 colll'>
                        <ul>
                            <li>Carrot</li>
                            <li>Broccoli</li>
                            <li>Spinach</li>
                            <li>Kale</li>
                            <li>Tomato</li>
                            <li>Cucumber</li>
                            <li>Pepper (Bell Pepper)</li>
                            <li>Zucchini</li>
                            <li>Eggplant</li>
                            <li>Onion</li>
                        </ul>
                    </div>

                    <div className='col-sm-3 colll'>
                        <ul>
                            <li>Garlic</li>
                            <li>Potato</li>
                            <li>Sweet Potato</li>
                            <li>Mushroom</li>
                            <li>Cauliflower</li>
                            <li>Brussels Sprouts</li>
                            <li>Asparagus</li>
                            <li>Green Beans</li>
                            <li>Peas</li>
                            <li>Radish</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Vegetables