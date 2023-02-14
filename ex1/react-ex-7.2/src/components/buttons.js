import React, { useState } from 'react';
import './index.css';

const CheckBox = () => {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: "Checkbox 1", checked: true },
        { id: 2, label: "Checkbox 2", checked: false },
        { id: 3, label: "Checkbox 3", checked: true },
        { id: 4, label: "Checkbox 4", checked: false }
    ]);


    return (
        <div>
            {checkboxes.map((checkbox) => (
                <label key={checkbox.id}>
                    <input
                        type="checkbox"
                        checked={checkbox.checked}
                    />
                    {checkbox.label}
                </label>
            ))}
        </div>
    );
};
export default CheckBox;
