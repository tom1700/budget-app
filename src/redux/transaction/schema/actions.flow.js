// @flow
import type { TransactionType } from './constants.flow';


export type AddTransactionParams = {
    productName: string,
    categoryId: number,
    value: number,
    type: TransactionType,
    accountId: number,
};

export type RemoveTransactionParams = {
    id: number,
    value: number,
    type: TransactionType,
};