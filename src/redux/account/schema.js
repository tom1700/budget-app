// @flow
import type { Currency } from './constants';

export type NewAccount = {
    name: string,
    balance: number,
    currency: Currency
};

export type Account = {
    id: number,
    name: string,
    balance: number,
    currency: Currency
};