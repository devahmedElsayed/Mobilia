import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


const Login = () => {
    const [email , setEmail]= useState("")
    const [pass , setPass]= useState("")
    const [showPass , setShowPass]= useState(false)





    const formSubmitHandler = (e)=>{
        e.preventDefault();

        if (email.trim() === "") return toast.error('Email is required');
        if (pass.trim() === "") return  toast.error('Password is required');


        console.log({email,pass})

    }
    // show pass
    const showPassHandler = ()=>{
        setShowPass(prev => !prev)
    }
  return (
    <div className='login'>
        <ToastContainer theme='colored'/>
       <h1 className="form_title">Login to your account</h1>
        <form onSubmit={formSubmitHandler} className='form'>
            <input value={email} 
            onChange={e=> setEmail(e.target.value)} 
            type="email"
             placeholder='Email' />

            <input 
            value={pass} 
            onChange={e=> setPass(e.target.value)} 
             type={showPass ? 'text' : 'password'}
              placeholder='password' />

             {showPass ? (
             <p onClick={showPassHandler}>< FaRegEye className='show_pass' /></p>
            ) :(
            <p onClick={showPassHandler}><FaRegEyeSlash className='show_pass' /></p>

            ) }
 
            <button className="form_btn">Login</button>
        </form>
        <div className="form_footer">
            Don't have an account?{" "}
            <Link to={'/register'} className='form_register'> Register </Link>
        </div>
    </div>
  )
}

export default Login