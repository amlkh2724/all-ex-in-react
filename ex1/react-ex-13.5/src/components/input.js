import { useRef,useEffect } from "react";
// import { useEffect, useRef, useState } from "react"
// The following exercise contains the following subjects:
// ● useEffect
// ● useRef
// Instructions
// Many times when you create a form you want to focus
// right away on a input field.
// Create an input field that will focus on the input element
// when the component mounts to the screen.
// Target the input field using ref.
import "./index.css"
const BoxSlides = () => {
    const focusInput = useRef(null);

useEffect(() => {
    focusInput.current.focus();
    console.log(focusInput);
  
}, []);

    return (
        <div className="center">
            <form>
                <input ref={focusInput} />
            </form>
        </div>
    );
};

export default BoxSlides;

