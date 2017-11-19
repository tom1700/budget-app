// @flow
import type { Currency } from './constants.flow';

export type Account = {
    id: number,
    name: string,
    balance: number,
    currency: Currency
};

export type AccountList = Array<Account>;