// import React, { useState } from 'react';
import './index.css';

const CustomButton = (props) => {
    const colors = ["blue", "red", "yellow"];
    // const [selectedColor, setSelectedColor] = useState(null);

    const handleClick = (color) => {
        props.onClick(color)
    }

    const renderCustomButtons = () => {
        return colors.map((color) => (
            <button key={color} style={{ backgroundColor: color }} onClick={() => handleClick(color)}>{color}</button>
        ));
    }

    return (
        <div>
            {renderCustomButtons()}
        </div>
    );
};

export default CustomButton;
