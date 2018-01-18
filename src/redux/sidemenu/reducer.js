// @flow
import { actions } from './constants';
import type { Action } from '../schema/action.flow';
import type { SideMenu } from './schema/reducer.flow';

export default (state : SideMenu = { isOpen: false } , action : Action) => {
    switch(action.type){
        case actions.OPEN_MENU:
            return {
                ...state,
                isOpen: true
            };
        case actions.CLOSE_MENU:
            return {
                ...state,
                isOpen: false
            };
        default:
            return state;
    }
};