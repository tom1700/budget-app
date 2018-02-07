import React from 'react';
import './Select.css';

const Select = ({label, children}) => (
    <div className="select">
        <label>{label}</label>
        <select>
            { children }
        </select>
    </div>
);

export default Select;