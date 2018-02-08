import React from 'react';
import { Route } from 'react-router';
import { routes } from './constants';
import Home from './screens/Home/Home';
import Accounts from './screens/Accounts';
import Transactions from './screens/Transactions';
import TransactionCategories from './screens/TransactionCategories';
import AddAccount from './screens/AddAccount';
import AddTransaction from './screens/AddTransaction';
import AddTransactionCategory from './screens/AddTransactionCategory';
import UpdateAccount from './screens/UpdateAccount/UpdateAccount';
import UpdateTransactionCategory from './screens/UpdateTransactionCategory/UpdateTransactionCategory';

export default () => (
    <div>
        <Route exact path={ routes.HOME } component={ Home } />
        <Route path={ routes.ACCOUNTS } component={ Accounts } />
        <Route path={ routes.TRANSACTION_CATEGORIES } component={ TransactionCategories} />
        <Route path={ routes.TRANSACTIONS } component={ Transactions } />
        <Route path={ routes.ADD_ACCOUNT} component={ AddAccount } />
        <Route path={ routes.ADD_TRANSACTION_CATEGORY } component={ AddTransactionCategory } />
        <Route path={ routes.ADD_TRANSACTION } component={ AddTransaction } />
        <Route path={ routes.UPDATE_ACCOUNT } component={ UpdateAccount } />
        <Route path={ routes.UPDATE_TRANSACTION_CATEGORY } component={ UpdateTransactionCategory } />
    </div>
);