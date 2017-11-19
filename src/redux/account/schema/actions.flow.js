// @flow
import type { Currency } from './constants.schema';


export type AddAccountParams = {
    name: string,
    balance: number,
    currency: Currency
};

export type RemoveAccountParams = {
    id: number,
};

export type UpdateAccountParams = {
    id: number,
    name: ?string,
    balance: ?number,
    currency: ?Currency
};