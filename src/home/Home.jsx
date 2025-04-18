
import React from 'react'
import Navbar from '../navbar/Navbar'
import heroBaner from '../assets/hero_banner.jpg'
import heroTile from '../assets/hero_title.png'
import play from '../assets/play_icon.png'
import info from '../assets/info_icon.png'
import './Home.css';
import Catagories from '../catagories/Catagories.jsx'
import Footer from '../footer/Footer.jsx'

const Home = () => {


  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
                <img src={heroBaner} alt="" className="heroBaner" />
                <div className="heroTile">
                <img src={heroTile} alt=""/>
                <div className='buttons'>
                <button> <img src={play} alt="" />Play</button>
                <button id='info'> <img src={info} alt="" />More info</button>
                </div>

                <Catagories/>
                <Catagories Catagorie={"Only on Netflix"} changeCateg={"top_rated"}/>
                <Catagories Catagorie={"Blockbustor Movies"} changeCateg={"popular"}/>
                <Catagories Catagorie={"Upcomming"} changeCateg={"upcoming"}/>

                <Footer/>
                </div>
                
        </div>
    </div>
  )
}

export default Home