// @flow
import { actions as accountsActions } from './constants';
import { actions as transactionsActions, transactionType } from '../transaction/constants';
import type { AccountList } from './schema/reducer.flow';
import type { Action } from '../schema/action.flow';


const addAccount = (state : AccountList, payload) => state.concat([{
    ...payload,
    id: state.length
}]);

const removeAccount = (state : AccountList, payload) => state.filter(
    account => account.id !== payload.id
);

const updateAccount = (state : AccountList, payload) => state.map(
    account => (account.id === payload.id) ? { ...account, ...payload } : account
);

const handleTransactionCreation = (state : AccountList, payload) => {
    const { type, value, accountId } = payload;
    const account = state.find(account => account.id === accountId);

    if (account) {
        const { balance } = account;

        switch(type) {
            case transactionType.INCOME:
                return updateAccount(state, { id: accountId, balance: balance + value });
            case transactionType.EXPENSE:
                return updateAccount(state, { id: accountId, balance: balance - value });
            default:
                return state;
        }
    }

    return state;
};

const handleTransactionRemoval = (state : AccountList, payload) => {
    const { type, value, accountId } = payload;
    const account = state.find(account => account.id === accountId);

    if (account) {
        const { balance } = account;

        switch(type) {
            case transactionType.INCOME:
                return updateAccount(state, { id: accountId, balance: balance - value });
            case transactionType.EXPENSE:
                return updateAccount(state, { id: accountId, balance: balance + value });
            default:
                return state;
        }
    }

    return state;
};

export default (state : AccountList = [], action : Action) => {
    switch (action.type) {
        case accountsActions.ADD_ACCOUNT:
            return addAccount(state, action.payload);
        case accountsActions.REMOVE_ACCOUNT:
            return removeAccount(state, action.payload);
        case accountsActions.UPDATE_ACCOUNT:
            return updateAccount(state, action.payload);
        case transactionsActions.ADD_TRANSACTION:
            return handleTransactionCreation(state, action.payload);
        case transactionsActions.REMOVE_TRANSACTION:
            return handleTransactionRemoval(state, action.payload);
        default:
            return state;
    }
}