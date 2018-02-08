import { actions } from './constants';

export const initDatabase = ({ accounts, transactions, categories }) => ({
    type: actions.INIT_DATABASE,
    payload: { accounts, transactions, categories }
});