import React from 'react';
import './AccountElement.css';

const AccountElement = ({ name, balance, currency, id, removeElement }) => (
    <div className="account-element">
        <span>{ name }</span>
        <span>{ balance }{ currency }</span>
        <span className="account-element__delete" onClick={ () => removeElement({ id }) }>Delete</span>
    </div>
);

export default AccountElement;