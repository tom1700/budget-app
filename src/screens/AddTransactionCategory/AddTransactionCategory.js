import React from 'react';
import AddTransactionCategoryForm from '../../components/Forms/AddTransactionCategory/AddTransactionCategory';
import { Link } from 'react-router-dom';
import { routes } from '../../constants';

const AddTransactionCategoryScreen = () => (
    <div>
        <div>Add transaction category</div>
        <Link to={routes.TRANSACTION_CATEGORIES}>Transaction Categories</Link>
        <AddTransactionCategoryForm />
    </div>
);

export default AddTransactionCategoryScreen;