import './App.css';
import React from 'react';
import Home from './Pages/Home';
import Shop from './Pages/Shop/Shop'
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Footer from './Componant/Footer/Footer'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './Componant/NavbarFile/NavBar';
import ProductDetails from './Componant/ProductList/ProductDetails';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { useEffect } from 'react';
import { TbHandClick } from "react-icons/tb";



function App() {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('btn_scroll');
      if (btn) {
        btn.style.display = window.scrollY >= 400 ? 'block' : 'none';
      }
    };

    const handleBtnClick = () => {
      window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', handleScroll);
    const btn = document.getElementById('btn_scroll');
    if (btn) {
      btn.addEventListener('click', handleBtnClick);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (btn) {
        btn.removeEventListener('click', handleBtnClick);
      }
    };
  }, []);

  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>  
          <Route path='/' element={<Home />}/>
          <Route path='/Shop' element={<Shop category='Shop'/>}/>
          <Route path='/About' element={<About category='About '/>}/>
          <Route path='/Service' element={<Service category='Service'/>}/>
          <Route path='/Blog' element={<Blog category='Blog'/>}/>
          <Route path='/Contact' element={<Contact category='Contact'/>}/>
          <Route path='/ProudctDetails/:id' element={<ProductDetails />}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>

      <Footer/>
      <button id='btn_scroll'><TbHandClick /></button>

    </BrowserRouter>
      
  );
}

export default App;
