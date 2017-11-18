// @flow
import { actions } from './constants';
import type { TransactionCategory } from './schema.flow';

export const addTransactionCategory = ({ name, type } : TransactionCategory) => ({
    type: actions.ADD_CATEGORY,
    payload: { name, type }
});

export const removeTransactionCategory = ({ id } : TransactionCategory) => ({
    type: actions.REMOVE_CATEGORY,
    payload: { id },
});

export const updateTransactionCategory = ({ id, name } : TransactionCategory) => ({
    type: actions.UPDATE_CATEGORY,
    payload: { id, name }
});