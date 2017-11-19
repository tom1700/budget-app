// @flow
import { actions } from './constants';
import type {
    AddTransactionCategoryParams,
    RemoveTransactionCategoryParams,
    UpdateTransactionCategoryParams
} from './schema/actions.flow';

export const addTransactionCategory = ({ name, type } : AddTransactionCategoryParams) => ({
    type: actions.ADD_CATEGORY,
    payload: { name, type }
});

export const removeTransactionCategory = ({ id } : RemoveTransactionCategoryParams) => ({
    type: actions.REMOVE_CATEGORY,
    payload: { id },
});

export const updateTransactionCategory = ({ id, name } : UpdateTransactionCategoryParams) => ({
    type: actions.UPDATE_CATEGORY,
    payload: { id, name }
});