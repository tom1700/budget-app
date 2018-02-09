import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({ type, disabled, text }) => (
    <button className="submit-button" type={ type } disabled={ disabled }>{ text }</button>
);

export default SubmitButton;