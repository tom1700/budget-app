import React from 'react';

const AccountElement = ({ name, id }) => (
    <div className="account-element">
        <span>{ id } </span>
        <span>{ name }</span>
    </div>
);

export default AccountElement;