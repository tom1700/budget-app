// @flow
import getFullTransactionList from '../getFullTransactionsList';
import store from './storeMock';

describe('Selectors: getFullAccountList', () => {
    test('Should return list of transactions', () => {
        expect(getFullTransactionList(store)).toMatchObject(store.transactions);
    });
});
