// @flow
import { transactionType } from '../transaction/constants';
import { actions } from './constants';
import { actions as databaseActions } from '../constants';
import type { TranasactionCategoryList } from './schema/reducer.flow';
import type { Action } from '../../schema/action.flow';

const getLastId = (state: TranasactionCategoryList) => state[state.length-1].id;

const addCategory = (state : TranasactionCategoryList, payload) => state.concat([{
    ...payload,
    id: getLastId(state) + 1
}]);

const removeCategory = (state : TranasactionCategoryList, payload) => state.filter(
    category => category.id !== payload.id
);

const updateCategory = (state : TranasactionCategoryList, payload) => state.map(
    category => (category.id === payload.id) ? { ...category, ...payload } : category
);

const defaultState = [
    { id: 0, name: 'Others', type: transactionType.INCOME },
    { id: 1, name: 'Others', type: transactionType.EXPENSE }
];

export default (state : TranasactionCategoryList = defaultState, action : Action) => {
    switch(action.type) {
        case databaseActions.INIT_DATABASE:
            return state.concat(action.payload.categories.slice(2));
        case actions.ADD_CATEGORY:
            return addCategory(state, action.payload);
        case actions.REMOVE_CATEGORY:
            return removeCategory(state, action.payload);
        case actions.UPDATE_CATEGORY:
            return updateCategory(state, action.payload);
        default:
            return state;
    }
};