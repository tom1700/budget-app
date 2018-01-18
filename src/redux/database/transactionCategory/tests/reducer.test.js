import { actions } from '../constants';
import { transactionType } from '../../transaction/constants';
import reducer from '../reducer';

describe('TransactionCategory reducer', () => {
    test('Should return list with default category', () => {
        expect(reducer(undefined, {})).toContainEqual({
            id: 0,
            name: 'Others',
            type: transactionType.INCOME
        });
    });
    test('Should return list with default category', () => {
        expect(reducer(undefined, {})).toContainEqual({
            id: 1,
            name: 'Others',
            type: transactionType.EXPENSE
        });
    });
});

describe('TransactionCategory reducer: ADD_CATEGORY', () => {
    const state = [];
    const action = {
        type: actions.ADD_CATEGORY,
        payload: {
            name: 'Salary',
            type: transactionType.INCOME
        }
    };

    test('Should return list with proper object', () => {
        expect(reducer(state, action)).toContainEqual({
            id: 0,
            name: 'Salary',
            type: transactionType.INCOME
        });
    });
});

describe('TransactionCategory reducer: REMOVE_CATEGORY', () => {
    const state = [{
        id: 0,
        name: 'Salary',
        type: transactionType.INCOME
    }];
    const action = {
        type: actions.REMOVE_CATEGORY,
        payload: {
            id: 0
        },
    };

    test('Should return empty list', () => {
        expect(reducer(state, action)).toHaveLength(0);
    });
});

describe('TransactionCategory reducer: UPDATE_CATEGORY', () => {
    const state = [{
        id: 0,
        name: 'Salary',
        type: transactionType.INCOME
    }];
    const action = {
        type: actions.UPDATE_CATEGORY,
        payload: {
            id: 0,
            name: 'Salary2'
        }
    };

    test('Should return list of length 1', () => {
        expect(reducer(state, action)).toHaveLength(1);
    });
    test('Should return list with proper object', () => {
        expect(reducer(state, action)).toContainEqual({
            id: 0,
            name: 'Salary2',
            type: transactionType.INCOME
        });
    });
});

