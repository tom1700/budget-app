import React from 'react';
import './TransactionElement.css';

const TransactionElement = ({ id, productName, value, type, removeElement }) => (
    <div className="transaction-category-element">
        <span>{ productName }</span>
        <span>{ value }</span>
        <span>{ type }</span>
        <span className="transaction-category-element__delete" onClick={ () => removeElement({ id }) }>
        Delete
        </span>
    </div>
);

export default TransactionElement;