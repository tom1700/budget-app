import React from 'react';
import { connect } from 'react-redux';
import getFullTransactionCategoriesList from '../redux/database/selectors/getFullTransactionCategoriesList';
import { removeTransactionCategory } from '../redux/database/transactionCategory/actions';
import { routes } from '../constants';
import List from '../components/List/List';
import TransactionCategoryElement from '../components/List/TransactionCategoryElement/TransactionCategoryElement';
import ScreenWithListLayout from './Layout/ScreenWithListLayout';

const TransactionCategoryScreen = ({ categories, removeTransactionCategory }) => (
    <ScreenWithListLayout
        link={routes.ADD_TRANSACTION_CATEGORY}
        linkTitle=" + Add new"
        title="Your categories"
    >
        <List
            data={ categories }
            ElementComponent={ TransactionCategoryElement }
            removeElement={ removeTransactionCategory }
        />
    </ScreenWithListLayout>
);

export default connect(
    state => ({
        categories: getFullTransactionCategoriesList(state)
    }),
    { removeTransactionCategory }
)(TransactionCategoryScreen);