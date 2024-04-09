import React from 'react';
import './Herosection.css';
import coch from '../Assets/couch.png'
const Herosection = () => {
  return (
    <div className='hero'>
        
        <div className='row herotemp '>
            <div className='col-xxl-6  col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
                <h2>Modern Interior Design Studio</h2>
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
  )
}

export default Herosection