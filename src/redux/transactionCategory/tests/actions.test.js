// @flow
import { actions, error } from '../constants';
import { transactionType } from '../../transaction/constants';
import {
    addTransactionCategory,
    removeTransactionCategory,
    updateTransactionCategory,
} from '../actions';

describe('TransactionCategory actions: addCategory', () => {
    const params = {
        name: 'Category',
        type: transactionType.EXPENSE,
    };

    test('Should return matching object', () => {
        expect(addTransactionCategory(params)).toMatchObject({
            type: actions.ADD_CATEGORY,
            payload: {
                name: params.name,
                type: params.type,
            }
        });
    });
});

describe('TransactionCategory actions: removeCategory', () => {
    test('Should return matching object', () => {
        const params = {
            id: 2,
        };
        expect(removeTransactionCategory(params)).toMatchObject({
            type: actions.REMOVE_CATEGORY,
            payload: {
                id: params.id,
            }
        });
    });
    test('Should return error', () => {
        expect(removeTransactionCategory({ id: 0})).toMatchObject({
            error: error.REMOVING_DEFAULT_CATEGORY
        });
        expect(removeTransactionCategory({ id: 1})).toMatchObject({
            error: error.REMOVING_DEFAULT_CATEGORY
        });
    });
});

describe('TransactionCategory actions: updateCategory', () => {
    const params = {
        id: 0,
        name: 'Name'
    };

    test('Should return matching object', () => {
        expect(updateTransactionCategory(params)).toMatchObject({
            type: actions.UPDATE_CATEGORY,
            payload: {
                id: params.id,
                name: params.name
            }
        });
    });
});
