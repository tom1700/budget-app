import { actions } from '../constants';
import reducer from '../reducer';

describe('SideMenu reducer: OPEN_MENU', () => {
    const state = { isOpen: false };
    const action = {
        type: actions.OPEN_MENU,
    };

    test('Should set isOpen prop to true', () => {
        expect(reducer(state, action)).toMatchObject({
            isOpen: true
        });
    });
});

describe('SideMenu reducer: CLOSE_MENU', () => {
    const state = { isOpen: true };
    const action = {
        type: actions.CLOSE_MENU,
    };

    test('Should set isOpen prop to false', () => {
        expect(reducer(state, action)).toMatchObject({
            isOpen: false
        });
    });
});
