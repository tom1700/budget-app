// @flow
import type { TransactionType } from '../../transaction/schema/constants.flow';


export type AddTransactionCategoryParams = {
    name: string,
    type: TransactionType
};
export type RemoveTransactionCategoryParams = {
    id: number,
};
export type UpdateTransactionCategoryParams = {
    id: number,
    name: string,
};
