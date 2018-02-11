import React from 'react';
import { connect } from 'react-redux';
import getFullTransactionsList from '../redux/database/selectors/getFullTransactionsList';
import { routes } from '../constants';
import List from '../components/List/List';
import TransactionsElement from '../components/List/TransactionElement/TransactionElement';
import ScreenWithListLayout from './Layout/ScreenWithListLayout';

const TransactionsScreen = ({ transactions }) => {
    const renderElement = props => <TransactionsElement { ...props } />;

    return (
        <ScreenWithListLayout
            link={routes.ADD_TRANSACTION}
            linkTitle="+ Add new"
            title="Your transactions"
        >
            <List
                data={ transactions }
                renderElement={ renderElement }
                title="Your transactions:"
            />
        </ScreenWithListLayout>
    );
};

export default connect(
    state => ({
        transactions: getFullTransactionsList(state)
    })
)(TransactionsScreen);
