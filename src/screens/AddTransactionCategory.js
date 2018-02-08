import React from 'react';
import AddTransactionCategoryForm from '../components/Forms/AddTransactionCategory/AddTransactionCategory';
import ScreenWithFormLayout from './Layout/ScreenWithFormLayout';
import { routes } from '../constants';

const AddTransactionCategoryScreen = () => (
    <ScreenWithFormLayout
        title="Add transaction category"
        link={routes.TRANSACTION_CATEGORIES}
        linkTitle="Transaction Categories"
    >
        <AddTransactionCategoryForm />
    </ScreenWithFormLayout>
);

export default AddTransactionCategoryScreen;