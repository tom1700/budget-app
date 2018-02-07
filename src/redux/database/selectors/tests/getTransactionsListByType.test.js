// @flow
import getTransactionsListByType from '../getTransactionsListByType';
import store from './storeMock';
import { transactionType } from '../../transaction/constants';

describe('Selectors: getTransactionListByType', () => {
    test('Should return list of transactions with type EXPENSE', () => {
        const getExpenseTransactionsList = getTransactionsListByType(transactionType.EXPENSE);
        const expenseTransactions = store.transactions.slice(2);
        expect(getExpenseTransactionsList(store)).toMatchObject(expenseTransactions);
    });
    test('Should return list of transactions with type INCOME', () => {
        const getIncomeTransactionsList = getTransactionsListByType(transactionType.INCOME);
        const incomeTransactions = store.transactions.slice(0,2);
        expect(getIncomeTransactionsList(store)).toMatchObject(incomeTransactions);
    });
});
