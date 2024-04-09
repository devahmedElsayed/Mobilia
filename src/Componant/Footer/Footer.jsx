import React, { Fragment } from 'react';
import './Footer.css';
import footerimg from '../Assets/footer.png';
import { CiMail } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
return (
    <Fragment>
        <div className='mainfooter'>
            <div className='footerImg'>
                <img src={footerimg} alt="" />
            </div>
            <div >
                <div className='subscribe'>
                    <p><CiMail /></p>
                    <h2>Subscribe to Newsletter</h2>
                </div>
                <div className='inpFooter'>
                    <input type="text"  placeholder='Enter your name'/>
                    <input type="email" placeholder='Enter your email'/>
                    <button><IoIosSend /></button>
                </div>
            </div>
            <div className='row footercol1'>
                <div className='col-4 hedfoot'>
                    <h2>Furni.</h2>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
                    <div className='d-flex iconFooter'>
                        <p><FaFacebookF /></p>
                        <p><FaTwitter /></p>
                        <p><FaInstagram /></p>
                        <p><FaLinkedin /></p>
                    </div>
                </div>
                <div className='col-8   '>
                    <div className='row links-wrap footercol2'>
                    <div className='col-6 col-sm-6 col-md-3'>
                        <p>About us</p>
                        <p>Services</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                    </div>
                    <div className='col-6 col-sm-6 col-md-3'>
                        <p>Support</p>
                        <p>Knowledge base</p>
                        <p>Live chat</p>
                    </div>
                    <div className='col-6 col-sm-6 col-md-3'>
                        <p>Jobs</p>
                        <p>Our team</p>
                        <p>Leadership</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='col-6 col-sm-6 col-md-3'>
                        <p>Nordic Chair</p>
                        <p>Kruzo Aero</p>
                        <p>Ergonomic Chair</p>
                    </div>
                </div>
                </div>
            </div>
            <hr />
            <div className='copy'>
                <div>
                <p>Copyright ©2024. All Rights Reserved. — Designed with love by dev-Ahmed A Elsayed</p>
                </div>
                <div className='d-flex terms'>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                </div>
            </div>
            </div>
    </Fragment>
  )
}

export default Footer