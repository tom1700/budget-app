import React from 'react';
import { connect } from 'react-redux';
import getFullTransactionCategoriesList from '../redux/database/selectors/getFullTransactionCategoriesList';
import { routes } from '../constants';
import List from '../components/List/List';
import TransactionCategoryElement from '../components/List/TransactionCategoryElement/TransactionCategoryElement';
import ScreenWithListLayout from './Layout/ScreenWithListLayout';

const TransactionCategoryScreen = ({ categories }) => (
    <ScreenWithListLayout
        link={routes.ADD_TRANSACTION_CATEGORY}
        linkTitle=" + Add new"
        title="Your categories"
    >
        <List
            data={ categories }
            ElementComponent={ TransactionCategoryElement }
        />
    </ScreenWithListLayout>
);

export default connect(
    state => ({
        categories: getFullTransactionCategoriesList(state)
    })
)(TransactionCategoryScreen);