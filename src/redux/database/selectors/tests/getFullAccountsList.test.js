// @flow
import getFullAccountsList from '../getFullAccountsList';
import store from './storeMock';

describe('Selectors: getFullAccountList', () => {
    test('Should return list of accounts', () => {
        expect(getFullAccountsList(store)).toMatchObject(store.accounts);
    });
});
