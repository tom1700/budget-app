// @flow
import type { AddAccountParams, RemoveAccountParams, UpdateAccountParams } from './schema/actions.flow';
import { actions } from './constants';


export const addAccount = ({ name, balance, currency } : AddAccountParams) => ({
    type: actions.ADD_ACCOUNT,
    payload: { name, balance: parseFloat(balance), currency }
});

export const removeAccount = ({ id } : RemoveAccountParams) => ({
    type: actions.REMOVE_ACCOUNT,
    payload: { id }
});

export const updateAccount = ({ id, name, balance, currency } : UpdateAccountParams) => ({
    type: actions.UPDATE_ACCOUNT,
    payload: { id, name, balance, currency }
});