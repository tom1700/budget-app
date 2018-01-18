// @flow
import { actions } from '../constants';
import {
    openMenu,
    closeMenu,
} from '../actions';

describe('SideMenu actions: openMenu', () => {
    test('Should return matching object', () => {
        expect(openMenu()).toMatchObject({
            type: actions.OPEN_MENU,
        });
    });
});

describe('SideMenu actions: closeMenu', () => {
    test('Should return matching object', () => {
        expect(closeMenu()).toMatchObject({
            type: actions.CLOSE_MENU,
        });
    });
});