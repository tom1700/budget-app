// @flow
export const currency = {
    PLN: 'PLN',
};

export const actions = {
    ADD_ACCOUNT: 'ADD_ACCOUNT',
    REMOVE_ACCOUNT: 'REMOVE_ACCOUNT',
    UPDATE_ACCOUNT: 'UPDATE_ACCOUNT',
};

export type Currency = $Values<typeof currency>;
