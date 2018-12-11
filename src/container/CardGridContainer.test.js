// Import setup
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import CardGridContainer from './CardGridContainer';
import Card from '../presentational/Card';

describe('CardGridContainer', () => {
  let wrapper = '';
  let componentInstance = '';

  beforeEach(() => {
    wrapper = shallow((
      <CardGridContainer />
    ));
    componentInstance = wrapper.instance();
  });

  test('renders the CardGridContainer component with dataset of 24 items', () => {
    expect(componentInstance.state.message).toBe('Game Start')
  });


  test('renders the CardGridContainer message state with game start', () => {
    expect(componentInstance.state.message).toBe('Game Start')
  });
});