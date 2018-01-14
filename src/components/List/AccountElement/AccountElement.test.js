import React from 'react';
import { shallow } from 'enzyme';
import AccountElement from './AccountElement';

describe('components/AccountElement', () => {
    test('Should render DOM tree', () => {
        const component = shallow(<AccountElement />);
        expect(component.exists()).toBeTruthy();
    });
});
