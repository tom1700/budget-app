import React from 'react';
import AddAccountForm from '../components/Forms/AddAccount/AddAccount';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

const AddAccountScreen = () => (
    <div>
        <h2>Add Account</h2>
        <Link to={routes.ACCOUNTS}>Accounts</Link>
        <AddAccountForm />
    </div>
);


export default AddAccountScreen;