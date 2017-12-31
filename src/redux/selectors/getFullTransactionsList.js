import { createSelector } from 'reselect';

const getFullTransactionsList = createSelector(
    state => state.transactions,
    transactions => transactions
);

export default getFullTransactionsList;