import React, { useState } from 'react'
import './Login.css'
import logo from '../assets/logo.png'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const [signin, setSignin] = useState("Sign In");
    const nevigate=useNavigate()
    const login=()=> {
        nevigate('/');
    }
  return (
    <div className='login'>
            <img src={logo} alt="" />
        <div className='conta'>
            <h2>{signin}</h2>
            <div className="inputarea">
                {signin === "Sign Up" ? <input type="text" placeholder='Your name' />
                :<></>}
            
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button onClick={login}>{signin}</button>
            </div>

            <div className="buttom">
                <div className="check">
                <input type="checkbox" />
                <p>Remember Me</p>
                </div>
                <a href="">Need Help?</a>
            </div>
            <div className="formSwitch">
                {signin === "Sign In" ? <p>New on Netflix? <span onClick={() => {setSignin("Sign Up")}}>Sign Up</span></p>
                : <p>Already have account? <span onClick={() => {setSignin("Sign In")}}>Sign In</span></p>}
            </div>
        </div>
        </div>
  )
}

export default Login