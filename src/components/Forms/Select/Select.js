import React from 'react';
import './Select.css';

const Select = ({input, label, children}) => (
    <div className="select">
        <label className="select__label">{label}</label>
        <select className="select__select" { ...input } >
            { children }
        </select>
    </div>
);

export default Select;