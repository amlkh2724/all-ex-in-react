// import { useRef } from "react";
import { useEffect, useState } from "react"
import './index.css'
// The following exercise contains the following subjects:
// ● useEffect
// ● useRef
// Instructions
// Many times when you create a form you want to focus
// right away on a input field.
// Create an input field that will focus on the input element
// when the component mounts to the screen.
// Target the input field using ref



const BoxSlides = () => {
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        const boxes = document.getElementsByClassName("box");
        for (let i = 0; i < boxes.length; i++) {
          boxes[i].style.transform = "translateX(100%)";
        }
      }, 1000);
      
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          const boxes = document.getElementsByClassName("box");
          for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.transform = "translateX(-100%)";
          }
        }, 4000);
        
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
  
    return (
      <div className="boxes">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
      </div>
    );
  };
  
  export default BoxSlides;
  
