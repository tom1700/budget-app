// @flow
import type { Account, NewAccount } from './schema';
import { actions } from './constants';


export const addAccount = ({ name, balance, currency } : NewAccount) => ({
    type: actions.ADD_ACCOUNT,
    payload: { name, balance, currency }
});

export const removeAccount = ({ id } : { id : number }) => ({
    type: actions.REMOVE_ACCOUNT,
    payload: { id }
});

export const updateAccount = ({ id, name, balance, currency } : Account) => ({
    type: actions.UPDATE_ACCOUNT,
    payload: { id, name, balance, currency }
});