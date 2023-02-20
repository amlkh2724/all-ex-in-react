// import { useRef } from "react";
// import { useEffect, useRef, useState } from "react"
import './index.css'
// The following exercise contains the following subjects:
// ● useEffect
// Instructions
// 1. We want to create a simple app: a box that changes color
// every half a second.
// 2. Let’s change the box to a circle after 5 color changes.
import Timer from './timer';
const BoxSlides = () => {

    return (
        <div className="center">
            <Timer></Timer>
        </div>
    );
};

export default BoxSlides;

