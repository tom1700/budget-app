// @flow
import getTransactionCategoriesListByType from '../getTransactionCategoriesListByType';
import store from './storeMock';
import { transactionType } from '../../transaction/constants';

describe('Selectors: getTransactionCategoriesListByType', () => {
    test('Should return list of transaction categories with type EXPENSE', () => {
        const getExpenseTransactionCategoriesList = getTransactionCategoriesListByType(transactionType.EXPENSE);
        const expenseTransactionCategories = store.categories.slice(1,2);
        expect(getExpenseTransactionCategoriesList(store)).toMatchObject(expenseTransactionCategories);
    });
    test('Should return list of transactions categories with type INCOME', () => {
        const getIncomeTransactionCategoriesList = getTransactionCategoriesListByType(transactionType.INCOME);
        const incomeTransactionCategories = store.categories.slice(0,1);
        expect(getIncomeTransactionCategoriesList(store)).toMatchObject(incomeTransactionCategories);
    });
});
