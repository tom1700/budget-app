// @flow
import { actions as transactionActions, transactionType } from './constants';
import { actions as accountActions } from '../account/constants';
import { actions as categoryActions } from '../transactionCategory/constants';
import { actions as databaseActions } from '../constants';
import type { TransactionList } from './schema/reducer.flow';
import type { Action } from '../../schema/action.flow';

const getLastId = (state: TransactionList) => state.length > 0 ? state[state.length-1].id : -1;

const addTransaction = (state : TransactionList, payload) => state.concat([{
    ...payload,
    id: getLastId(state) + 1
}]);

const removeTransaction = (state : TransactionList, payload) => state.filter(
    transaction => transaction.id !== payload.id
);

const handleAccountRemoval = (state : TransactionList, payload) => state.filter(
    transaction => transaction.accountId !== payload.id
);

const handleCategoryRemoval = (state : TransactionList, payload) => state.map(
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

export default (state : TransactionList = [], action : Action) => {
    switch(action.type){
        case databaseActions.INIT_DATABASE:
            return state.concat(action.payload.transactions);
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