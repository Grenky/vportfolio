import React from "react";
import '../Header/styles/Header.css';
import { Link } from "react-scroll";

export default function Header() {
    return(
        <header>
            <h1>Vitalii Petrushenko</h1>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="nature-section" duration={500}  smooth={true}>Nature</Link>
                    <Link to="people-section" duration={500}  smooth={true}>People</Link>
                    <Link to="symbols-section" duration={500} smooth={true}>Symbols / Different</Link>
                </ul>
            </nav>
        </header>
    )
}