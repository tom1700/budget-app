// @flow
import type { Account } from './schema.flow';
import { actions } from './constants';


export const addAccount = ({ name, balance, currency } : Account) => ({
    type: actions.ADD_ACCOUNT,
    payload: { name, balance, currency }
});

export const removeAccount = ({ id } : Account) => ({
    type: actions.REMOVE_ACCOUNT,
    payload: { id }
});

export const updateAccount = ({ id, name, balance, currency } : Account) => ({
    type: actions.UPDATE_ACCOUNT,
    payload: { id, name, balance, currency }
});