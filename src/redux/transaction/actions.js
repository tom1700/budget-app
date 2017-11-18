// @flow
import { actions } from './constants';
import type { Transaction } from './schema.flow';

export const addTransaction = ({ productName, categoryId, value, type, accountId } : Transaction) => ({
    type: actions.ADD_TRANSACTION,
    payload: {
        productName,
        categoryId,
        value,
        type,
        accountId,
        date: new Date().getTime()
    }
});

export const removeTransaction = ({ id, value, type } : Transaction) => ({
    type: actions.REMOVE_TRANSACTION,
    payload: { id, value, type }
});