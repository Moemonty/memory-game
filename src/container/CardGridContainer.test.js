// Import setup
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import CardGridContainer from './CardGridContainer';
import Card from '../presentational/Card';

it('renders the CardGridContainer component with dataset of 24 items', () => {
  const wrapper = shallow((
    <CardGridContainer />
  ));

  // Debug shallow rendering
  // console.log(wrapper.debug());

  expect(wrapper.find('Card')).toBeDefined();
  expect(wrapper.find('Card')).toHaveLength(24);
});