import React from 'react';
import { shallow } from 'enzyme';
import { AddAccountForm } from './AddAccount';

describe('components/AddAccount', () => {
    test('Should render DOM tree', () => {
        const component = shallow(<AddAccountForm />);
        expect(component.exists()).toBeTruthy();
    });
});
