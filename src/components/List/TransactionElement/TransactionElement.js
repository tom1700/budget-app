import React from 'react';
import './TransactionElement.css';

const TransactionElement = ({ id, productName, value, type, accountId, removeElement }) => (
    <div className="transaction-category-element">
        <span>{ productName }</span>
        <span>{ value }</span>
        <span>{ type }</span>
        <span
            className="transaction-category-element__delete"
            onClick={ () => removeElement({ id, value, type,accountId }) }
        >
        Delete
        </span>
    </div>
);

export default TransactionElement;