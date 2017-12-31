// @flow
import getFullTransactionCategoryList from '../getFullTransactionCategoriesList';
import store from './storeMock';

describe('Selectors: getFullAccountList', () => {
    test('Should return list of categories', () => {
        expect(getFullTransactionCategoryList(store)).toMatchObject(store.categories);
    });
});
