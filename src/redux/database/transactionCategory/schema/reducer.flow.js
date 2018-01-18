// @flow
import type { TransactionType } from '../../transaction/schema/constants.flow';


export type TransactionCategory = {
    id: number,
    name: string,
    type: TransactionType
};

export type TranasactionCategoryList = Array<TransactionCategory>;