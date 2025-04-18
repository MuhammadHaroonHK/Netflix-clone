import React from 'react'
import './Footer.css'
import facebook from '../assets/facebook_icon.png'
import insta from '../assets/instagram_icon.png'
import twit from '../assets/twitter_icon.png'
import youtube from '../assets/youtube_icon.png'

const Footer = () => {
  return (
    <div className='container'>
        <div className='icons'>
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={twit} alt="" />
            <img src={youtube} alt="" />
        </div>

        <div className="textarea">
        <div className="text">
            <a href="">Audio Discription</a>
            <a href="">Inverter Relation</a>
            <a href="">Legal Notices</a>
            </div>
            <div className='text'>
            <a href="">Help Center</a>
            <a href="">Jobs</a>
            <a href="">Cookies</a>
            </div>
            <div className='text'>
            <a href="">Media Center</a>
            <a href="">Privacy</a>
            <a href="">Corporate Information</a>
            </div>
            <div className='text'>
            <a href="">Gift Cards</a>
            <a href="">Terms of Use</a>
            <a href="">Contact Us</a>
            </div>
        
        </div>
        <p className='copy'>&copy; {new Date().getFullYear()} Netflix, inc</p>
    </div>
  )
}

export default Footer