import React from 'react';
import { shallow } from 'enzyme';
import CardGridContainer from './CardGridContainer';

it('renders the CardGridContainer component', () => {
  const cardGridContainer = shallow(<CardGridContainer />);

  console.log(cardGridContainer);
});