import React, { useState, useEffect } from "react";
import '../Header/styles/Header.css';
import { Link as ScrollLink} from "react-scroll";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);


    return(
        <header className="header" id="top">
        <h1><ScrollLink  to="top" smooth={true} duration={500}>Vitalii Petrushenko</ScrollLink ></h1>
        <nav className="desktop-nav">
            <ul>
                <li><Link  to="/">Home</Link ></li>
                <li><ScrollLink  to="nature-section" smooth={true} duration={500}>Nature</ScrollLink ></li>
                <li><ScrollLink  to="people-section" smooth={true} duration={500}>People</ScrollLink ></li>
                <li><ScrollLink  to="symbols-section" smooth={true} duration={500}>Symbols / Different</ScrollLink ></li>
                <li><Link to="/video">Video</Link></li>
            </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        {menuOpen && (
            <nav className={`nav-overlay ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><ScrollLink  to="top" smooth={true} duration={500} onClick={toggleMenu}>Home</ScrollLink ></li>
                    <li><ScrollLink  to="nature-section" smooth={true} duration={500} onClick={toggleMenu}>Nature</ScrollLink ></li>
                    <li><ScrollLink  to="people-section" smooth={true} duration={500} onClick={toggleMenu}>People</ScrollLink ></li>
                    <li><ScrollLink  to="symbols-section" smooth={true} duration={500} onClick={toggleMenu}>Symbols / Different</ScrollLink ></li>
                    <li><Link to="/video">Video</Link></li>
                </ul>
            </nav>
        )}
    </header>
    );
}