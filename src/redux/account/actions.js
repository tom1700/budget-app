import { actions } from './constants';


export const addAccount = ({ name, balance, currency }) => ({
    type: actions.ADD_ACCOUNT,
    payload: { name, balance, currency }
});

export const removeAccount = ({ id }) => ({
    type: actions.REMOVE_ACCOUNT,
    payload: { id }
});

export const updateAccount = ({ id, name, balance, currency }) => ({
    type: actions.UPDATE_ACCOUNT,
    payload: { id, name, balance, currency }
});