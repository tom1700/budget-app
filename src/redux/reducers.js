import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import accountsReducer from './database/account/reducer';
import transactionsReducer from './database/transaction/reducer';
import categoriesReducer from './database/transactionCategory/reducer';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    accounts: accountsReducer,
    transactions: transactionsReducer,
    categories: categoriesReducer,
    form: formReducer,
    router: routerReducer
});