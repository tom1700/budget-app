// @flow
import { actions, transactionType } from '../constants';
import {
    addTransaction,
    removeTransaction
} from '../actions';

describe('Transactions actions: addTransaction', () => {
    const params = {
        productName: 'Chips',
        categoryId: 0,
        value: 12,
        type: transactionType.INCOME,
        accountId: 13,
    };


    test('Should return matching object', () => {
        expect(addTransaction(params)).toMatchObject({
            type: actions.ADD_TRANSACTION,
            payload: {
                value: params.value,
                productName: params.productName,
                categoryId: params.categoryId,
                type: params.type,
                accountId: params.accountId,
            }
        });
    });

    test('Should return object with date property', () => {
        expect(addTransaction(params).payload.date).toBeDefined();
    });
});

describe('Transactions actions: removeTransaction', () => {
    const params = {
        id: 0,
        type: transactionType.INCOME,
        value: 12,
    };

    test('Should return matching object', () => {
        expect(removeTransaction(params)).toMatchObject({
            type: actions.REMOVE_TRANSACTION,
            payload: {
                id: params.id,
                type: params.type,
                value: params.value
            }
        });
    });
});
