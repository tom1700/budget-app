// @flow
import type { TransactionType } from '../transaction/schema.flow';

export type TransactionCategory = {
    id: number,
    name: string,
    type: TransactionType
};