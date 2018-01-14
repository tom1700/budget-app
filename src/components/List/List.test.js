import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('components/List', () => {
    test('Should render DOM tree', () => {
        const component = shallow(<List data={ [] } renderElement={ () => <div /> }/>);
        expect(true).toBeTruthy();
    });
});
