import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import accountsReducer from './account/reducer';
import transactionsReducer from './transaction/reducer';
import categoriesReducer from './transactionCategory/reducer';


export default combineReducers({
    accounts: accountsReducer,
    transactions: transactionsReducer,
    categories: categoriesReducer,
    form: formReducer
});