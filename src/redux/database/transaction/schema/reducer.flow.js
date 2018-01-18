// @flow
import type { TransactionType } from './constants.flow';


export type Transaction = {
    id: number,
    productName: string,
    categoryId: number,
    value: number,
    type: TransactionType,
    accountId: number,
    date: number
};

export type TransactionList = Array<Transaction>;