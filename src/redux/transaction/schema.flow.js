// @flow
import { transactionType } from './constants';

export type TransactionType = $Values<typeof transactionType>;

export type Transaction = {
    id: number,
    productName: string,
    categoryId: number,
    value: number,
    type: TransactionType,
    accountId: number,
    date: number
};