// import { useRef } from "react";
import { useEffect, useState } from "react"
import './index.css'
// . We want to create a simple app: a box that slides onto the
// screen 1 sec after the page loads and then disappears
// from the DOM after 4 seconds.
// 2. We also want to be able to add 3 such boxes of different
// sizes



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
  
