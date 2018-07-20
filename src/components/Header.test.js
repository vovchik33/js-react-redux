import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('<Header/>', () => {
    it('renders without crashing', () => {
        const header = shallow(<Header/>);
        expect(header.find('div').length).toEqual(1);
    })
    it('renders without crashing', () => {
        const header = shallow(<Header/>);
        expect(header.find('div.header').length).toEqual(1);
    })
    it('renders without crashing', () => {
        const header = shallow(<Header/>);
        const expectedOutput = '<div class="header">Header</div>';
        const realOutput = header.find('div.header').html();
        expect(realOutput.indexOf(expectedOutput)>-1).toEqual(true);
    })
})
