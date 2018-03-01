import React from 'react';
import { connect } from 'react-redux';
import getFullAccountsList from '../../redux/database/selectors/getFullAccountsList';
import getFullTransactionsList from '../../redux/database/selectors/getFullTransactionsList';
import getFullTransactionCategoriesList from '../../redux/database/selectors/getFullTransactionCategoriesList';
import { removeAccount } from '../../redux/database/account/actions';
import { removeTransaction } from '../../redux/database/transaction/actions';
import { removeTransactionCategory } from '../../redux/database/transactionCategory/actions';
import { routes } from '../../constants';
import List from '../../components/List/List';
import AccountElement from '../../components/List/AccountElement/AccountElement';
import TransactionsElement from '../../components/List/TransactionElement/TransactionElement';
import TransactionCategoryElement from '../../components/List/TransactionCategoryElement/TransactionCategoryElement';
import Widget from '../../components/Widget/Widget';
import './Home.css';

const HomeScreen = ({ accounts, transactions, categories }) => (
    <div className="home-screen">
        <div className="home-screen__grid">
            <Widget
                link={routes.ADD_ACCOUNT}
                linkTitle="+ Add new"
                title="Your accounts"
            >
                <List
                    data={ accounts }
                    ElementComponent={ AccountElement }
                    removeElement={ removeAccount }
                />
            </Widget>
            <Widget
                link={routes.ADD_TRANSACTION_CATEGORY}
                linkTitle=" + Add new"
                title="Your categories"
            >
                <List
                    data={ categories }
                    ElementComponent={ TransactionCategoryElement }
                    removeElement={ removeTransactionCategory }
                />
            </Widget>
            <Widget
                link={routes.ADD_TRANSACTION}
                linkTitle="+ Add new"
                title="Your transactions"
            >
                <List
                    data={ transactions }
                    ElementComponent={ TransactionsElement }
                    removeElement={ removeTransaction }
                />
            </Widget>
        </div>
    </div>
);

export default connect(
    state => ({
        accounts: getFullAccountsList(state),
        transactions: getFullTransactionsList(state),
        categories: getFullTransactionCategoriesList(state)
    }),
    {
        removeAccount,
        removeTransaction,
        removeTransactionCategory
    }
)(HomeScreen);