// @flow
import { actions as accountsActions, currency } from '../constants';
import { actions as transactionsActions, transactionType } from '../../transaction/constants';
import reducer from '../reducer';

describe('Account reducer: ADD_ACCOUNT', () => {
    const state = [];
    const action = {
        type: accountsActions.ADD_ACCOUNT,
        payload: {
            name: 'Account1',
            balance: 500,
            currency: currency.PLN
        }
    };

    test('Should return list with proper object', () => {
        expect(reducer(state, action)).toContainEqual({
            id: 0,
            ...action.payload
        });
    });
});

describe('Account reducer: REMOVE_ACCOUNT', () => {
    const state = [{
        name: 'Account1',
        balance: 500,
        currency: currency.PLN,
        id: 0
    }];
    const action = {
        type: accountsActions.REMOVE_ACCOUNT,
        payload: {
            id: 0
        }
    };

    test('Should return empty list', () => {
        expect(reducer(state, action)).toHaveLength(0);
    });
});

describe('Account reducer: UPDATE_ACCOUNT', () => {
    const state = [{
        name: 'Account1',
        balance: 500,
        currency: currency.PLN,
        id: 0
    }];
    const action = {
        type: accountsActions.UPDATE_ACCOUNT,
        payload: {
            name: 'Account2',
            balance: 300,
            currency: currency.PLN,
            id: 0
        }
    };

    test('Should return list of length 1', () => {
        expect(reducer(state, action)).toHaveLength(1);
    });
    test('Should return list with proper object', () => {
        expect(reducer(state, action)).toContainEqual({
            name: 'Account2',
            balance: 300,
            currency: currency.PLN,
            id: 0
        });
    });
});

describe('Account reducer: ADD_TRANSACTION', () => {
    const state = [{
        name: 'Account1',
        balance: 500,
        currency: currency.PLN,
        id: 0
    }];

    test('Should subtract 10 from account with id 0', () => {
        const action = {
            type: transactionsActions.ADD_TRANSACTION,
            payload: {
                type: transactionType.EXPENSE,
                value: 10,
                accountId: 0
            }
        };

        expect(reducer(state, action)).toContainEqual({
            name: 'Account1',
            balance: 490,
            currency: currency.PLN,
            id: 0
        });
    });
    test('Should add 10 to account with id 0', () => {
        const action = {
            type: transactionsActions.ADD_TRANSACTION,
            payload: {
                type: transactionType.INCOME,
                value: 10,
                accountId: 0
            }
        };

        expect(reducer(state, action)).toContainEqual({
            name: 'Account1',
            balance: 510,
            currency: currency.PLN,
            id: 0
        });
    });
});


describe('Account reducer: REMOVE_TRANSACTION', () => {
    const state = [{
        name: 'Account1',
        balance: 500,
        currency: currency.PLN,
        id: 0
    }];

    test('Should subtract 10 from account with id 0', () => {
        const action = {
            type: transactionsActions.REMOVE_TRANSACTION,
            payload: {
                type: transactionType.INCOME,
                value: 10,
                accountId: 0
            }
        };

        expect(reducer(state, action)).toContainEqual({
            name: 'Account1',
            balance: 490,
            currency: currency.PLN,
            id: 0
        });
    });
    test('Should add 10 to account with id 0', () => {
        const action = {
            type: transactionsActions.REMOVE_TRANSACTION,
            payload: {
                type: transactionType.EXPENSE,
                value: 10,
                accountId: 0
            }
        };

        expect(reducer(state, action)).toContainEqual({
            name: 'Account1',
            balance: 510,
            currency: currency.PLN,
            id: 0
        });
    });
});