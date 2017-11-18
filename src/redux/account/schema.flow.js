// @flow
import { currency } from './constants';

export type Currency = $Values<typeof currency>;

export type Account = {
    id: number,
    name: string,
    balance: number,
    currency: Currency
};