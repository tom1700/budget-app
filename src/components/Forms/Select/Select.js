import React from 'react';
import './Select.css';

const Select = ({label, children}) => (
    <div className="select">
        <label className="select__label">{label}</label>
        <select className="select__select">
            { children }
        </select>
    </div>
);

export default Select;