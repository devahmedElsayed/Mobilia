
import React, { useContext } from 'react';
import './NavBars.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosLogIn } from "react-icons/io";
import { FaOpencart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CartContext from '../../Context/CartContext';

const NavBar = () => {
  const {cartItemsLength}= useContext(CartContext)
  return (   
    <div className='navparent'>
      <Navbar expand="lg" className="bg-transparent nav ">
        <div>
          <Navbar.Brand href="#home"> <h2>FURNI MODEL <span>.</span></h2></Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <ul>
                <li><Link to={'/'}>Home</Link> </li>
                <li><Link to={'/Shop'}>Shop</Link></li>
                <li><Link to={'/About'}>About us</Link></li>
                <li><Link to={'/Service'}>Services</Link></li>
                <li><Link to={'/Blog'}>Blog</Link></li>
                <li><Link to={'/Contact'}>Contact us</Link></li>
              </ul>
              <div className='iconnav'>
                <div>
                <p><Link to={'/Login'}><IoIosLogIn /></Link></p>
                </div>
                <div>
                <p><Link to={'/Cart'}>
                
                  <FaOpencart />
                  </Link></p>
                  {cartItemsLength > 0 && (
                                    <p className='countCart'>{cartItemsLength}</p>

                    )}
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar> 
    </div>
  )
}

export default NavBar;
