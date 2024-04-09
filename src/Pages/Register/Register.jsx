import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'

const Register = () => {
    const [email , setEmail]= useState("")
    const [userName , setUserName]= useState("")
    const [pass , setPass]= useState("")





    const formSubmitHandler = (e)=>{
        e.preventDefault();

        if (email.trim() === "") return toast.error('Email is required');
        if (userName.trim() === "") return toast.error('UserName is required');
        if (pass.trim() === "") return  toast.error('Password is required');


        console.log({email,pass,userName})

    }
    
  return (
    <div className='login'>
        <ToastContainer theme='colored'/>
       <h1 className="form_title">Create new account</h1>
        <form onSubmit={formSubmitHandler} className='form'>
            <input value={email} 
            onChange={e=> setEmail(e.target.value)} 
            type="email"
             placeholder='Email' />



            <input value={userName} 
            onChange={e=> setUserName(e.target.value)} 
            type="text"
             placeholder='UserName' />

            <input 
            value={pass} 
            onChange={e=> setPass(e.target.value)} 
             type='password'
              placeholder='password' />

            
 
            <button className="form_btn">Register</button>
        </form>
        <div className="form_footer">
            Already have an account?{" "}
            <Link to='/Login' className='form_register'> Login </Link>
        </div>
    </div>
  )
}

export default Register