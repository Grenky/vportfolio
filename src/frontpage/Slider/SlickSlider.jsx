import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles/SlickSlider.css';
import { Element } from "react-scroll";

import image1 from './img/DJI_0286-HDR-Pano 16x9.small.jpg';
import image2 from './img/DJI_0515-HDR-Pano 16х9.small.jpg';
import image3 from './img/DJI_0795-HDR-Pano.small.jpg';
import image4 from './img/DSC_1468 16x9.small.jpg';
import image5 from './img/DSC_1613.16x9.small.jpg';
import image6 from './img/DSC_6935 ed sRGB.16x9.small.jpg';
import image7 from './img/DSC_5823.jpg';


const SlickSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <Element name='top'>
        <Slider {...settings}>
          <div className='first-sld'>
            <img src={image1} alt='first-sld'/>
          </div>
          <div className='second-sld'>
            <img src={image2} alt='first-sld'/>
          </div>
          <div className='third-sld'>
            <img src={image3} alt='first-sld'/>
          </div>
          <div className='fourth-sld'>
            <img src={image4} alt='first-sld'/>
          </div>
          <div className='fifth-sld'>
            <img src={image5} alt='first-sld'/>
          </div>
          <div className='sixth-sld'>
            <img src={image6} alt='first-sld'/>
          </div>
          <div className='seventh-sld'>
            <img src={image7} alt='first-sld'/>
          </div>
        </Slider>
      </Element>
    );
};

export default SlickSlider;

