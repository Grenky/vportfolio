import React from "react"
import Header from "../frontpage/Header/Header"
import "./styles/VideoPage.css";


export default function VideoPage() {
    return(
        <div className="video-wrapper">
            <Header />
            <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
                <div>
                <video 
                style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    minWidth: '100%', 
                    minHeight: '100%', 
                    objectFit: 'cover', 
                    zIndex: 1 
                }} 
                autoPlay 
                muted 
                loop 
            >
                <source src="/video/5. Night sky.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
                </div>
            </div>
            <div className="video-content">

            </div>
        </div>
    )
}