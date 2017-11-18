import { actions as accountsActions } from './constants';
import { actions as transactionsActions, transactionType } from '../transaction/constants';


const addAccount = (state, payload) => state.concat([{
    ...payload,
    id: state.length
}]);

const removeAccount = (state, payload) => state.filter(
    account => account.id !== payload.id
);

const updateAccount = (state, payload) => state.map(
    account => (account.id === payload.id) ? { ...account, ...payload } : account
);

const handleTransactionCreation = (state, payload) => {
    const { type, value, accountId } = payload;
    const account = state.find(account => account.id === accountId);
    const { balance } = account;

    switch(type) {
        case transactionType.INCOME:
            return updateAccount(state, { id: accountId, balance: balance + value });
        case transactionType.EXPENSE:
            return updateAccount(state, { id: accountId, balance: balance - value });
        default:
            return state;
    }
};

const handleTransactionRemoval = (state, payload) => {
    const { type, value, accountId } = payload;
    const account = state.find(account => account.id === accountId);
    const { balance } = account;

    switch(type) {
        case transactionType.INCOME:
            return updateAccount(state, { id: accountId, balance: balance - value });
        case transactionType.EXPENSE:
            return updateAccount(state, { id: accountId, balance: balance + value });
        default:
            return state;
    }
};

export default (state = [], action) => {
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