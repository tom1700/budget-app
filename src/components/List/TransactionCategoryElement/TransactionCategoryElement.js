import React from 'react';
import './TransactionCategoryElement.css';

const TransactionCategoryElement = ({ id, name, type, removeElement }) => (
    <div className="transaction-category-element">
        <span>{ name }</span>
        <span>{ type }</span>
        <span className="transaction-category-element__delete" onClick={ () => removeElement({ id }) }>
            Delete
        </span>
    </div>
);

export default TransactionCategoryElement;