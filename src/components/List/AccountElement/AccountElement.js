import React from 'react';
import './AccountElement.css';

const AccountElement = ({ name, balance, currency, id, removeAccount }) => (
    <div className="account-element">
        <span>{ name }</span>
        <span>{ balance }{ currency }</span>
        <span onClick={ () => removeAccount({ id }) }>Delete</span>
    </div>
);

export default AccountElement;