import React from "react"
import './styles/Footer.css';



export default function Footer() {
    return(
        <div className="footer-wrapper">
            <h2>Contact me</h2>
            <a href="mailto:petrushenkovitalii@gmail.com"><img src="/footerImg/gmail.png" alt="facebook" /></a>
            <a href="https://www.instagram.com/petrushenkovitalii?igsh=dTJ0c285eW9wcGhu" target="blank"><img src="/footerImg/instagramm.png" alt="instagramm" /></a>
            <a  href="https://www.facebook.com/profile.php?id=100013822681034" target="blank"><img src="/footerImg/facebook.png" alt="facebook" /></a>
            <p className="rights">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
    )
}