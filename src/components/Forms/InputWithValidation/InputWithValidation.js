import React from 'react';
import './InputWithValidation.css';

const FieldWithValidation = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="field-with-validation">
        <label className="field-with-validation__label">{label}</label>
        <input className="field-with-validation__input" {...input} placeholder={label} type={type} />
        {touched &&
        ((error && <span className="field-with-validation__error">{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </div>
);

export default FieldWithValidation;