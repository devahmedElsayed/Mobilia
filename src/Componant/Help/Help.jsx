import React, { Fragment } from 'react'
import './Help.css';
import help1 from '../Assets/help1.jpg'
import help2 from '../Assets/help2.jpg'
import help3 from '../Assets/help3.jpg'
import img_help1 from '../Assets/mat-1.png'
import img_help2 from '../Assets/mat-2.png'
import img_help3 from '../Assets/mat-4.png'
const Help = () => {
  return (
    <Fragment>
    <div className='help'>
        <div className='help_slider'>
            <div className='left_help'>
                <div className='img_help'>
                    <img src={help1} alt="" className='help1'/>
                    <img src={help2} alt="" className='help2'/>
                    <img src={help3} alt="" className='help3'/>
                </div>
            </div>
        <div className='right_help'>
                <h2>We Help You Make Modern Interior Design</h2>
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
            <div className='list_help'>
                <ul>
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                </ul>
            </div>
            <button>Exploar</button>
        </div>
        </div>
    </div>
    <div className='model'>
        <div className='cont_model'>
        <div className='box_model'>
            <div className='img-bg'>
                <img src={img_help1} alt="" />
            </div>
            <div>
                <h2>Nordic Chair</h2>
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className='box_model'>
            <div className='img-bg'>
                <img src={img_help2} alt="" />
            </div>
            <div>
                <h2>Nordic Chair</h2>
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className='box_model'>
            <div className='img-bg'>
                <img src={img_help3} alt="" />
            </div>
            <div    >
                <h2>Nordic Chair</h2>
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                <a href="">Read More</a>
            </div>
        </div>
        
        
    </div>
    </div>
    </Fragment>
  )
}

export default Help