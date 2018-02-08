import React from 'react';
import AddTransactionForm from '../components/Forms/AddTransaction/AddTransaction';
import ScreenWithFormLayout from './Layout/ScreenWithFormLayout';
import { routes } from '../constants';

const AddTransactionScreen = () => (
    <ScreenWithFormLayout
        title="Add transacation"
        link={routes.TRANSACTIONS}
        linkTitle="Transactions"
    >
        <AddTransactionForm />
    </ScreenWithFormLayout>
);

export default AddTransactionScreen;
