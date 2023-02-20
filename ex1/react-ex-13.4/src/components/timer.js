import React from 'react'

import { useEffect, useState } from 'react';
import Spinner from './spinner';
const Timer = () => {
    const [isRunning, showSpinner] = useState(true)
    useEffect(() => {
        const setTime = setTimeout(() => {
            showSpinner(false)
        }, 3000)
        return () => {
            clearTimeout(setTime)
            console.log(setTime);
        };
    }, []);
    return (
        <div>
            {isRunning && <Spinner />}
        </div>
    );
};

export default Timer;

