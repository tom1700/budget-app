import { actions, currency } from '../constants';
import {
    addAccount,
    removeAccount,
    updateAccount,
} from '../actions';

describe('Accounts actions: addAccount', () => {
    const params = {
        name: 'Account',
        balance: 100,
        currency: currency.PLN
    };

    test('Should return matching object', () => {
        expect(addAccount(params)).toMatchObject({
            type: actions.ADD_ACCOUNT,
            payload: {
                name: params.name,
                balance: params.balance,
                currency: params.currency,
            }
        });
    });
});

describe('Accounts actions: removeAccount', () => {
    const params = {
        id: '0',
    };

    test('Should return matching object', () => {
        expect(removeAccount(params)).toMatchObject({
            type: actions.REMOVE_ACCOUNT,
            payload: {
                id: params.id
            }
        });
    });
});

describe('Accounts actions: updateAccount', () => {
    const params = {
        id: '0',
        name: 'newName',
        balance: 100,
        currency: currency.PLN,
    };

    test('Should return matching object', () => {
        expect(updateAccount(params)).toMatchObject({
            type: actions.ADD_ACCOUNT,
            payload: {
                id: params.id,
                name: params.name,
                balance: params.balance,
                currency: params.currency,
            }
        });
    });
});
