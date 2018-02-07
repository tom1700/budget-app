import { createSelector } from 'reselect';

const getTransactionsListByType = type => createSelector(
    state => state.transactions,
    transactions => transactions.filter(transaction => transaction.type === type),
);

export default getTransactionsListByType;