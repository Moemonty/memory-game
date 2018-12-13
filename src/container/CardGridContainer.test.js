// Import setup
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import CardGridContainer from './CardGridContainer';
import Card from '../presentational/Card';

describe('CardGridContainer', () => {
  test('renders the CardGridContainer with Card components twice the length of the dataset array', () => {
    const cardSet = [
      {
        name: 'The Scorpion',
        img: 'http://www.moemonty.com/Scorpion.jpg'
      },
      {
        name: 'The Sun',
        img: 'http://www.moemonty.com/Sun.jpg'
      }
    ];

    const wrapper = shallow((
      <CardGridContainer cardSet={cardSet} />
    ));

    expect(wrapper.find('Card')).toHaveLength(4);
  });

  test('renders the CardGridContainer message state with game start', () => {
    const cardSet = [
      {
        name: 'The Scorpion',
        img: 'http://www.moemonty.com/Scorpion.jpg'
      },
      {
        name: 'The Sun',
        img: 'http://www.moemonty.com/Sun.jpg'
      }
    ];

    const wrapper = shallow((
      <CardGridContainer cardSet={cardSet} />
    ));

    expect(wrapper.find('[data-status]').text()).toBe('Game Status: Game Start');
  });

  test('game message to be Matched! if cards are the same', () => {
    const cardSet = [
      {
        name: 'The Scorpion',
        img: 'http://www.moemonty.com/Scorpion.jpg'
      },
      {
        name: 'The Sun',
        img: 'http://www.moemonty.com/Sun.jpg'
      }
    ];

    const wrapper = mount((
      <CardGridContainer cardSet={cardSet} />
    ));

    const componentInstance = wrapper.instance();

    const cardBoot = wrapper.find('[data-name="The Sun"]').forEach((node, index) => {
      node.simulate('click');
    });

    expect(wrapper.find('[data-status]').text()).toBe('Game Status: Matched!');
  });

  test('game message to NOT be Matched! if cards are not the same', () => {
    const cardSet = [
      {
        name: 'The Scorpion',
        img: 'http://www.moemonty.com/Scorpion.jpg'
      },
      {
        name: 'The Sun',
        img: 'http://www.moemonty.com/Sun.jpg'
      }
    ];

    const wrapper = mount((
      <CardGridContainer cardSet={cardSet} />
    ));


    wrapper.find('[data-name="The Scorpion"]').forEach((node, index) => {
      if(index === 0 ){
        node.simulate('click');
      }
    });

    wrapper.find('[data-name="The Sun"]').forEach((node, index) => {
      if(index === 0 ){
        node.simulate('click');
      }
    });

    expect(wrapper.find('[data-status]').text()).toBe('Game Status: No Match');
  });

  test('If all cards are matched, player wins', () => {
    const cardSet = [
      {
        name: 'The Scorpion',
        img: 'http://www.moemonty.com/Scorpion.jpg'
      }
    ];

    const wrapper = mount((
      <CardGridContainer cardSet={cardSet} />
    ));

    wrapper.find('[data-name="The Scorpion"]').forEach((node, index) => {
      node.simulate('click');
    });

    expect(wrapper.find('[data-status]').text()).toBe('Game Status: You win!');
  });

  test('if a user clicks on an already clicked card', () => {
    const cardSet = [
      {
        name: 'The Scorpion',
        img: 'http://www.moemonty.com/Scorpion.jpg'
      }
    ];

    const wrapper = mount((
      <CardGridContainer cardSet={cardSet} />
    ));

    wrapper.find('[data-name="The Scorpion"]').forEach((node, index) => {
      if(index === 0 ){
        node.simulate('click');
        node.simulate('click');
      }
    });

    expect(wrapper.find('[data-status]').text()).toBe('Game Status: Same Card Chosen');
  });

  test('if a user clicks rapidly after a match, one card, one non-match, then another card then the board is locked', () => {
    const cardSet = [
      {
        name: 'The Scorpion',
        img: 'http://www.moemonty.com/Scorpion.jpg'
      },
      {
        name: 'The Sun',
        img: 'http://www.moemonty.com/Sun.jpg'
      }
    ];

    const wrapper = mount((
      <CardGridContainer cardSet={cardSet} />
    ));

    wrapper.find('[data-name="The Scorpion"]').forEach((node, index) => {
      if(index === 0 ){
        node.simulate('click');
      }
    });

    wrapper.find('[data-name="The Sun"]').forEach((node, index) => {
        node.simulate('click');
    });

    expect(wrapper.find('[data-status]').text()).toBe('Game Status: Board locked...');
  });

  test('a user resets a board after winning', () => {
    const cardSet = [
      {
        name: 'The Scorpion',
        img: 'http://www.moemonty.com/Scorpion.jpg'
      }
    ];

    const wrapper = mount((
      <CardGridContainer cardSet={cardSet} />
    ));

    wrapper.find('[data-name="The Scorpion"]').forEach((node, index) => {
      if(index === 0 ){
        node.simulate('click');
      }
    });

    expect(wrapper.find('[data-status]').text()).toBe('Game Status: Game Start');

    wrapper.find('[data-name="The Scorpion"]').forEach((node, index) => {
      if(index === 1 ){
        node.simulate('click');
      }
    });

    expect(wrapper.find('[data-status]').text()).toBe('Game Status: You win!');

    wrapper.find('.CardGridContainer__reset').simulate('click');
    expect(wrapper.find('[data-status]').text()).toBe('Game Status: Game Start');
  })
});