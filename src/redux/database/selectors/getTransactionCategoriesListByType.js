import { createSelector } from 'reselect';

const getTransactionCategoriesListByType = type => createSelector(
    state => state.categories,
    categories => categories.filter(category => category.type === type),
);

export default getTransactionCategoriesListByType;