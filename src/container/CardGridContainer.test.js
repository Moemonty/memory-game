// Import setup
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import CardGridContainer from './CardGridContainer';
import Card from '../presentational/Card';

describe('CardGridContainer', () => {
  // let wrapper = '';
  // let componentInstance = '';

  // beforeEach(() => {
  //   wrapper = shallow((
  //     <CardGridContainer />
  //   ));
  //   componentInstance = wrapper.instance();
  // });

  test('renders the CardGridContainer component with dataset of 24 items', () => {
    const wrapper = shallow((
      <CardGridContainer />
    ));
    expect(wrapper.find('Card')).toBeDefined();
    expect(wrapper.find('Card')).toHaveLength(24);
  });

  test('renders the CardGridContainer message state with game start', () => {
    const wrapper = shallow((
      <CardGridContainer />
    ));
    const componentInstance = wrapper.instance();

    expect(componentInstance.state.message).toBe('Game Start');
    console.log(wrapper.debug(), ' is the wrapper');
  });


    test.only('game message to be Matched! if cards are the same', () => {
      const wrapper = mount((
        <CardGridContainer />
      ));

      const componentInstance = wrapper.instance();
      // http://enthudrives.com/blog/how-to-test-react-state/
      // console.log(wrapper.debug());

      const cardBoot = wrapper.find('[data-name="Boot"]').forEach((node, index) => {
        // NO MATCH
        // if(index === 0 ){
        //   node.simulate('click');
        // } else {
        //   console.log('no click');
        // }

        node.simulate('click');
      });

      // cardBoot[0].simulate('click');

      // console.log('test');

      // console.log(cardBoot.debug() , ' is the boot');

      wrapper.update();

      // expect(componentInstance.state.message).toBe('Game Start');

      expect(componentInstance.state.message).toBe('Matched!');
      // console.log(wrapper.debug(), ' is the wrapper');
    });
});