import React from 'react';
import './InputWithValidation.css';

const FieldWithValidation = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="field-with-validation">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
    </div>
);

export default FieldWithValidation;