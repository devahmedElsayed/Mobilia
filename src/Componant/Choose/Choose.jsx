import React from 'react'
import choose from '../Assets/Choose.jpg'
import './Choose.css'
import { CiDeliveryTruck } from "react-icons/ci";
import { TiShoppingBag } from "react-icons/ti";
import { CgSupport } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";


const Choose = () => {
  return (
    <div className='chooseMain'>
        <div className='choose'>
            <div className='left-choose '>
                <div className='head_choose'>
                        <h2>Why Choose Us</h2>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                </div>
                <div className='left_icon_choose'>
                    <div >
                        <span className='icon_choose'><CiDeliveryTruck /></span>
                        <h5>Fast & Free Shipping</h5>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                    <div>
                        <span className='icon_choose'><TiShoppingBag /></span>
                        <h5>Easy to Shop</h5>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                    <div>
                        <span className='icon_choose'><CgSupport /></span>

                        <h5>24/7 Support</h5>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                    <div>
                        <span className='icon_choose'><FaRetweet /></span>

                        <h5>Hassle Free Returns</h5>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
            </div>
            <div className='right-choose '></div>
                <img src={choose} alt="" />
        </div>
    </div>
  )
}

export default Choose