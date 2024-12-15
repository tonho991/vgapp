'use client';

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Icon ({
    name = "",
    delay = 0,
    animation = 'zoom-in',
    wordmarker,
    className,
    color = 'white',
    from = "devicon",
    size = '6xl',
  }) {

     useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out-sine'
        })
      }, [])

    const sizeMap = {
      "sm": "0.875rem",  
      "md": "0.5rem", 
      "1xl": "1rem", 
      "2xl": "1.5rem", 
      "3xl": "1.875rem", 
      "4xl": "2.25rem",
      "5xl": "3rem", 
      "6xl": "3.75rem", 
      "7xl": "4.5rem",
    };
  
    const iconSize = sizeMap[size] || sizeMap['6xl'];
   
    const iconStyle = {
      fontSize: iconSize,
      color: color, 
      transitionDelay: `${delay}ms`, 
    };
  
    if (from == "devicon") {
      return (
        <i
          className={`devicon-${name}-plain${wordmarker ? '-wordmark' : ''} ${className}`}
          style={iconStyle}
          data-aos={animation}
          data-aos-delay={delay}
        ></i>
      );
    } else if (from == "google") {
      return (
        <span
          className={`material-symbols-outlined ${className}`}
          style={{ ...iconStyle}}
          data-aos={animation}
          data-aos-delay={delay}
        >
          {name}
        </span>
      );
    }
  }
  