import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { TiShoppingBag } from "react-icons/ti";
import { CgSupport } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";
import './Service.css';
import Matrial from '../../Componant/Matrial/Matrial';
import coch from '../../Componant/Assets/couch.png'

const Service = () => {
  return (
    <div className='service'>
      <div className='hero'>
        
        <div className='row herotemp '>
            <div className='col-xxl-6  col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
                <h2 style={{fontSize:'50px'}}>Services</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <div>
                    <button className='shop btn-warning'>Shop now</button>
                    <button className='exploar'>Exploar</button>
                </div>
            </div>
            <div className='col-xxl-6  col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
                <img src={coch} alt="" />
            </div>
        </div>
        
    </div>
      <div className='servic_grid'>
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
                <Matrial/>
    </div>
  )
}

export default Service