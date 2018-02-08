import React from 'react';
import { connect } from 'react-redux';
import getFullTransactionCategoriesList from '../redux/database/selectors/getFullTransactionCategoriesList';
import { routes } from '../constants';
import List from '../components/List/List';
import TransactionCategoryElement from '../components/List/TransactionCategoryElement/TransactionCategoryElement';
import ScreenWithListLayout from './Layout/ScreenWithListLayout';

const TransactionCategoryScreen = ({ categories }) => {
    const renderElement = props => <TransactionCategoryElement { ...props } />;

    return (
        <ScreenWithListLayout
            link={routes.ADD_TRANSACTION_CATEGORY}
            linkTitle="Add transaction category"
        >
            <List
                data={ categories }
                renderElement={ renderElement }
                title="Your transaction categories:"
            />
        </ScreenWithListLayout>
    );
};

export default connect(
    state => ({
        categories: getFullTransactionCategoriesList(state)
    })
)(TransactionCategoryScreen);