'use strict';

import {mount} from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import MediumPostsContainer from './MediumPostsContainer';
import MediumPosts from '../components/MediumPosts';

const storeFake = (state) => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };
};

describe('<MediumPostsContainer/>', () => {
  let wrapper;
  let component;
  let container;

  beforeEach(() => {
    const state = {mediumPosts: {loaded: true, posts: [{title: 'My Post'}]}};
    const store = storeFake(state);

    wrapper = mount(
        <Provider store={store}>
          <MediumPostsContainer/>
        </Provider>,
    );

    container = wrapper.find(MediumPostsContainer);
    component = container.find(MediumPosts);
  });

  it('should render container and component', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  describe('mapStateToProps', () => {
    it('should map state to props', () => {
      const expectedProps = {
        posts: [{title: 'My Post'}],
      };

      expect(component.props()).toEqual(expect.objectContaining(expectedProps));
    });
  });

  describe('mapDispatchToProps', () => {
    xit('check it does the preload', () => {
      const expectedProps = {
        posts: [{title: 'My Post'}],
      };

      expect(component.props()).toEqual(expect.objectContaining(expectedProps));
    });
  });
});
