import { createSelector } from 'reselect';

const getFullTransactionCategoriesList = createSelector(
    state => state.categories,
    categories => categories
);

export default getFullTransactionCategoriesList;