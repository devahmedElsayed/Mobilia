import React from 'react'
import post1 from '../../Componant/Assets/post-1.jpg'
import post2 from '../../Componant/Assets/post-2.jpg'
import post3 from '../../Componant/Assets/post-3.jpg'
import './Blog.css'
import Test from '../../Componant/Test/Test'
import coch from '../../Componant/Assets/couch.png'

const Blog = () => {
  return (
    <div className='blog'>
         <div className='hero'>
        
        <div className='row herotemp '>
            <div className='col-xxl-6  col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
                <h2 style={{fontSize:'50px'}}>Blog</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <div>
                    <button  style={{marginBottom:'10px'}} className='shop btn-warning'>Shop now</button>
                    <button className='exploar'>Exploar</button>
                </div>
            </div>
            <div className='col-xxl-6  col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
                <img src={coch} alt="" />
            </div>
        </div>
        
    </div>
    <div className='mainpost'>

        <div className='post_cont'>
                <img src={post1} alt="" />
                <p>First Time Home Owner Ideas</p>
                <p>by Kristin Watson on Dec 19, 2021</p>
            </div>
            <div className='post_cont'>
            <img src={post2} alt="" />
                <p>How To Keep Your Furniture Clean</p>
                <p>by Robert Fox on Dec 15, 2021</p>
            </div>
            <div className='post_cont'>
            <img src={post3} alt="" />
                <p>Small Space Furniture Apartment Ideas</p>
                <p>by Kristin Watson on Dec 12, 2021</p>
            </div>
        <div className='post_cont'>
                <img src={post1} alt="" />
                <p>First Time Home Owner Ideas</p>
                <p>by Kristin Watson on Dec 19, 2021</p>
            </div>
            <div className='post_cont'>
            <img src={post2} alt="" />
                <p>How To Keep Your Furniture Clean</p>
                <p>by Robert Fox on Dec 15, 2021</p>
            </div>
            <div className='post_cont'>
            <img src={post3} alt="" />
                <p>Small Space Furniture Apartment Ideas</p>
                <p>by Kristin Watson on Dec 12, 2021</p>
            </div>
        <div className='post_cont'>
                <img src={post1} alt="" />
                <p>First Time Home Owner Ideas</p>
                <p>by Kristin Watson on Dec 19, 2021</p>
            </div>
            <div className='post_cont'>
            <img src={post2} alt="" />
                <p>How To Keep Your Furniture Clean</p>
                <p>by Robert Fox on Dec 15, 2021</p>
            </div>
            <div className='post_cont'>
            <img src={post3} alt="" />
                <p>Small Space Furniture Apartment Ideas</p>
                <p>by Kristin Watson on Dec 12, 2021</p>
            </div>
    </div>
    <Test/>
    </div>
  )
}

export default Blog