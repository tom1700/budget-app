// @flow
import { actions } from './constants';
import type { AddTransactionParams, RemoveTransactionParams } from './schema/actions.flow';

export const addTransaction = ({ productName, categoryId, value, type, accountId } : AddTransactionParams) => ({
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

export const removeTransaction = ({ id, value, type } : RemoveTransactionParams) => ({
    type: actions.REMOVE_TRANSACTION,
    payload: { id, value, type }
});