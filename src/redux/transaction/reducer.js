import { actions as transactionActions, transactionType } from './constants';
import { actions as accountActions } from '../account/constants';
import { actions as categoryActions } from '../transactionCategory/constants';


const addTransaction = (state, payload) => state.concat([{
    ...payload,
    id: state.length
}]);

const removeTransaction = (state, payload) => state.filter(
    transaction => transaction.id !== payload.id
);

const handleAccountRemoval = (state, payload) => state.filter(
    transaction => transaction.accountId !== payload.id
);

const handleCategoryRemoval = (state, payload) => state.map(
    (transaction) => {
        if (transaction.categoryId === payload.id) {
            if (transaction.type === transactionType.INCOME) {
                return { ...transaction, categoryId: 0 };
            } else if (transaction.type === transactionType.EXPENSE) {
                return { ...transaction, categoryId: 1};
            }
        }
        return transaction;
    }
);

export default (state = [], action) => {
    switch(action.type){
        case transactionActions.ADD_TRANSACTION:
            return addTransaction(state, action.payload);
        case transactionActions.REMOVE_TRANSACTION:
            return removeTransaction(state, action.payload);
        case accountActions.REMOVE_ACCOUNT:
            return handleAccountRemoval(state, action.payload);
        case categoryActions.REMOVE_CATEGORY:
            return handleCategoryRemoval(state, action.payload);
        default:
            return state;
    }
};