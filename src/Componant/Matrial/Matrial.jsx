import React from 'react'
import matImg1 from '../Assets/mat-1.png'
import matImg2 from '../Assets/mat-2.png'
import matImg4 from '../Assets/mat-4.png'
import './Matrial.css'
import { IoMdAddCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";


const Matrial = () => {
  return (
    <div className='matrial '>
        <div className='head_matrial'>
            <h2>Crafted with excellent material.</h2>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <button className='bg-dark btn-mat'>Explore</button>
        </div>
        <div className='img_mat'>
        <div className='imgmat1' >
            <img src={matImg1} alt="" />
            
          
        </div>
        <div className='imgmat1' >
        <img src={matImg2} alt="" />
       
            
        </div>
        <div className='imgmat1' >
        <img src={matImg4} alt="" />
        
            
        </div>
        </div>
    </div>
  )
}

export default Matrial