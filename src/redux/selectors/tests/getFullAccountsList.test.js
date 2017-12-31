// @flow
import getFullAccountsList from '../getFullAccountsList';

describe('Selectors: getFullAccountList', () => {
    const store = {
        accounts: []
    };

    test('Should return list of accounts', () => {
        expect(getFullAccountsList(store)).toMatchObject(store.accounts);
    });
});
