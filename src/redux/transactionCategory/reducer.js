// @flow
import { transactionType } from '../transaction/constants';
import { actions } from './constants';
import type { TranasactionCategoryList } from './schema/reducer.flow';
import type { Action } from '../schema/action.flow';

const addCategory = (state : TranasactionCategoryList, payload) => state.concat([{
    ...payload,
    id: state.length
}]);

const removeCategory = (state : TranasactionCategoryList, payload) => state.filter(
    category => category.id !== payload.id
);

const updateCategory = (state : TranasactionCategoryList, payload) => state.map(
    category => (category.id === payload.id) ? { ...category, ...payload } : category
);

const defaultState = [
    { id: 0, name: 'Inne', type: transactionType.INCOME },
    { id: 1, name: 'Inne', type: transactionType.EXPENSE }
];

export default (state : TranasactionCategoryList = defaultState, action : Action) => {
    switch(action.type) {
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