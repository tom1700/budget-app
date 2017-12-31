// @flow
import getFullTransactionList from '../getFullTransactionsList';

describe('Selectors: getFullAccountList', () => {
    const store = {
        transactions: []
    };

    test('Should return list of transactions', () => {
        expect(getFullTransactionList(store)).toMatchObject(store.transactions);
    });
});
