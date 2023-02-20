// import { useRef } from "react";
import { useEffect, useRef, useState } from "react"
import './index.css'
// The following exercise contains the following subjects:
// ● useEffect
// Instructions
// 1. We want to create a simple app: a box that changes color
// every half a second.
// 2. Let’s change the box to a circle after 5 color changes.

const BoxSlides = () => {
    const boxRef = useRef(null);
    const [whitingFiveSeconds, updateIt] = useState(false)
    useEffect(() => {
        const boxNode = boxRef.current;
        boxNode.classList.add('my-class');
        setTimeout  (() => {
            updateIt(true)
        }, 5000)
    }, []);
    useEffect(() => {
        if (whitingFiveSeconds) {
            const circle = boxRef.current
            circle.classList.add('circle')
        }

    }, [whitingFiveSeconds])

    return (
        <div className="center">
            <div ref={boxRef} className="changingColor">
            </div>
        </div>
    );
};

export default BoxSlides;

