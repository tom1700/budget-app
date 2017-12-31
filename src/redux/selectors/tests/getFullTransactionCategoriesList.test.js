// @flow
import getFullTransactionCategoryList from '../getFullTransactionCategoriesList';

describe('Selectors: getFullAccountList', () => {
    const store = {
        categories: []
    };

    test('Should return list of categories', () => {
        expect(getFullTransactionCategoryList(store)).toMatchObject(store.categories);
    });
});
