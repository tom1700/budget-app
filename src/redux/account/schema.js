// @flow
import type { Currency } from './constants';

export type Account = {
    id: number,
    name: string,
    balance: number,
    currency: Currency
};