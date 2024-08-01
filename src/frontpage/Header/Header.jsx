import React, { useState, useEffect } from "react";
import '../Header/styles/Header.css';
import { Link } from "react-scroll";
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
        <h1>Vitalii Petrushenko</h1>
        <nav className="desktop-nav">
            <ul>
                <li><Link to="top" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="nature-section" smooth={true} duration={500}>Nature</Link></li>
                <li><Link to="people-section" smooth={true} duration={500}>People</Link></li>
                <li><Link to="symbols-section" smooth={true} duration={500}>Symbols / Different</Link></li>
            </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        {menuOpen && (
            <nav className={`nav-overlay ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="top" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="nature-section" smooth={true} duration={500} onClick={toggleMenu}>Nature</Link></li>
                    <li><Link to="people-section" smooth={true} duration={500} onClick={toggleMenu}>People</Link></li>
                    <li><Link to="symbols-section" smooth={true} duration={500} onClick={toggleMenu}>Symbols / Different</Link></li>
                </ul>
            </nav>
        )}
    </header>
    );
}