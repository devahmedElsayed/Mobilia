import React from 'react';
import './Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import coch from '../../Componant/Assets/couch.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='hero'>
        
        <div className='row herotemp '>
            <div className='col-xxl-6  col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
                <h2 style={{fontSize:'50px'}}>Contact</h2>
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
      <div className='contact_info' >
        <div className='contact_call'>
          <p className='icon_call'><FaLocationDot /></p>
          <p>43 Raymouth Rd. Baltemoer, London 3910</p>
        </div>
        <div className='contact_call'>
        <p className='icon_call'><MdEmail /></p>
        <p>info@yourdomain.com</p>
        </div>
        <div className='contact_call'>
        <p className='icon_call'><IoCall /></p>
        <p>+1 294 3925 3939</p>
        </div>
      </div>
      <div className='inp_name'>
        <div>
          <h5>First name</h5>
          <input type="text" />
        </div>
        <div>
          <h5>Last name</h5>
          <input type="text" />
        </div>
      </div>
      <div>
        <div className='inp_email'>
          <h5>Email address</h5>
          <input type="email" />
          </div>
        <div className='contact_text'>
          <h5>Message</h5>
          <textarea></textarea>
        </div>
      </div>
      <div className='send_Message'>
        <button>Send Message </button>
      </div>
    </div>
  )
}

export default Contact