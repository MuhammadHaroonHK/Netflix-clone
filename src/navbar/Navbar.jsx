import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.png'
import search from '../assets/search_icon.svg'
import bell from '../assets/bell_icon.svg'
import menu from '../assets/download.png' // Add a menu icon image
import close from '../assets/download (1).png' // Optional: for closing menu

const Navbar = () => {
    const navigate = useNavigate();
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        navigate('/login');
    };

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`navbar ${sticky ? 'togle' : ''}`}>
            <div className="leftNav">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className={`anchors ${menuOpen ? 'open' : ''}`}>
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
                    <img src={search} alt="Search" />
                    <p>Children</p>
                    <img src={bell} alt="Bell" />
                </div>

                <div className="logout">
                    <button onClick={handleLogout}>Log out</button>
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    <img src={menuOpen ? close : menu} alt="Menu" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
