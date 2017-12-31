import { createSelector } from 'reselect';

const getFullAccountList = createSelector(
    state => state.accounts,
    accounts => accounts
);

export default getFullAccountList;