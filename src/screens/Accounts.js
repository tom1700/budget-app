import React from 'react';
import AccountsList from '../components/Lists/Accounts';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

export default () => (
    <div>
        <Link to={routes.ADD_ACCOUNT}>Add account</Link>
        <AccountsList />
    </div>
);