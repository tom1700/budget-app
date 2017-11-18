import { actions } from './constants';


export const addTransaction = ({ productName, categoryId, value, type, accountId }) => ({
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

export const removeTransaction = ({ id, value, type }) => ({
    type: actions.REMOVE_TRANSACTION,
    payload: { id, value, type }
});

export const updateTransaction = ({ productName, categoryId, value, type, accountId, id }) => ({
    type: actions.UPDATE_TRANSACTION,
    payload: { productName, categoryId, value, type, accountId, id }
});