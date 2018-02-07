import React from 'react';
import { Link } from 'react-router-dom';
import AddTransactionForm from '../../components/Forms/AddTransaction/AddTransaction';
import { routes } from '../../constants';

const AddTransactionScreen = () => (
    <div>
        <div>Add transacation</div>
        <Link to={ routes.TRANSACTIONS } >Transactions</Link>
        <AddTransactionForm />
    </div>
);

export default AddTransactionScreen;