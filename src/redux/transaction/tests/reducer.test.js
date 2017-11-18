import { actions as transactionActions, transactionType } from '../constants';
import { actions as accountActions } from '../../account/constants';
import { actions as categoryActions } from '../../transactionCategory/constants';
import reducer from '../reducer';

describe('Transaction reducer: ADD_TRANSACTION', () => {
    const state = [];
    const date = new Date().getTime();
    const action = {
        type: transactionActions.ADD_TRANSACTION,
        payload: {
            productName: 'chips',
            categoryId: 0,
            value: 10,
            type: transactionType.EXPENSE,
            accountId: 0,
            date
        }
    };

    test('Should return list with proper object', () => {
        expect(reducer(state, action)).toContainEqual({
            id: 0,
            productName: 'chips',
            categoryId: 0,
            value: 10,
            type: transactionType.EXPENSE,
            accountId: 0,
            date
        });
    });
});

describe('Transaction reducer: REMOVE_TRANSACTION', () => {
    const state = [{
        id: 0,
        productName: 'chips',
        categoryId: 0,
        value: 10,
        type: transactionType.EXPENSE,
        accountId: 0,
        date: new Date().getTime()
    }];
    const action = {
        type: transactionActions.REMOVE_TRANSACTION,
        payload: {
            id: 0
        },
    };

    test('Should return empty list', () => {
        expect(reducer(state, action)).toHaveLength(0);
    });
});

describe('Transaction reducer: REMOVE_ACCOUNT', () => {
    const date = new Date().getTime();
    const state = [
        { id: 0, productName: 'chips', categoryId: 0, value: 10, type: transactionType.EXPENSE, accountId: 0, date },
        { id: 1, productName: 'chips', categoryId: 0, value: 10, type: transactionType.EXPENSE, accountId: 0, date },
        { id: 2, productName: 'chips', categoryId: 0, value: 10, type: transactionType.EXPENSE, accountId: 1, date }
    ];
    const action = {
        type: accountActions.REMOVE_ACCOUNT,
        payload: {
            id: 0,
        }
    };

    test('Should return list without transactions with accountId 0', () => {
        const newState = reducer(state, action);
        expect(newState).toHaveLength(1);
        expect(newState).toContainEqual({
            id: 2,
            productName: 'chips',
            categoryId: 0,
            value: 10,
            type: transactionType.EXPENSE,
            accountId: 1,
            date
        });
    });
});

describe('Transaction reducer: REMOVE_CATEGORY', () => {
    const date = new Date().getTime();
    const state = [
        { id: 0, productName: 'chips', categoryId: 3, value: 10, type: transactionType.EXPENSE, accountId: 0, date },
        { id: 1, productName: 'chips', categoryId: 2, value: 10, type: transactionType.INCOME, accountId: 0, date },
        { id: 2, productName: 'chips', categoryId: 2, value: 10, type: transactionType.EXPENSE, accountId: 1, date }
    ];
    const action = {
        type: categoryActions.REMOVE_CATEGORY,
        payload: {
            id: 2,
        }
    };

    test('Should change categoryId to 0 or 1 for transactions with categoryId = 2', () => {
        const newState = reducer(state, action);
        expect(newState).toContainEqual(
            { id: 1, productName: 'chips', categoryId: 0, value: 10, type: transactionType.INCOME, accountId: 0, date }
        );
        expect(newState).toContainEqual(
            { id: 2, productName: 'chips', categoryId: 1, value: 10, type: transactionType.EXPENSE, accountId: 1, date }
        );
    });
});

