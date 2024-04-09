import React from 'react'
import './R_Blog.css';
import post1 from '../Assets/post-1.jpg'
import post2 from '../Assets/post-2.jpg'
import post3 from '../Assets/post-3.jpg'
const RBlog = () => {
  return (
    <div className='r_blog'>
        <h2>Recent Blog</h2>
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
        </div>
    </div>
  )
}

export default RBlog