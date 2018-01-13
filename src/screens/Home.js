import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

export default () => (
    <div>
        Home <br/>
        <Link to={routes.TRANSACTIONS} >Transactions</Link><br/>
        <Link to={routes.ACCOUNTS} >Accounts</Link><br/>
        <Link to={routes.TRANSACTION_CATEGORIES} >TransactionCategories</Link><br/>
    </div>
);