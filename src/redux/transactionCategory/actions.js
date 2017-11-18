import { actions } from './constants';


export const addTransactionCategory = ({ name, type }) => ({
    type: actions.ADD_CATEGORY,
    payload: { name, type }
});

export const removeTransactionCategory = ({ id }) => ({
    type: actions.REMOVE_CATEGORY,
    payload: { id },
});

export const updateTransactionCategory = ({ id, name, type }) => ({
    type: actions.UPDATE_CATEGORY,
    payload: { id, name, type }
});