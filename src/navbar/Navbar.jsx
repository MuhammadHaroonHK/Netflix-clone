import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.png'
import search from '../assets/search_icon.svg'
import bell from '../assets/bell_icon.svg'
import out from '../assets/profile_img.png'

const Navbar = () => {

    const nevigate=useNavigate();

    const handlLogout=()=>{
        nevigate('/login');
    }

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll' , () =>{
            window.scrollY > 150 ? setSticky(true) : setSticky(false);
        })
    }, [])

  return (
    <div className={`navbar ${sticky ? 'togle' : ''}`}>
        <div className="leftNav">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="anchors">
                <ul>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
        </div>

        <div className="rightNav">
            <div className="right">
                <img src={search} alt="" />
                <p>Children</p>
                <img src={bell} alt="" />
            </div>
            <div className="logout">
                <button onClick={handlLogout}>Log out</button>
                
            </div>

        </div>
    </div>
  )
}

export default Navbar