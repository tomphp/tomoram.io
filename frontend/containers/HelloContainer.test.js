'use strict';

jest.mock('../components/HelloWorld');

import {mount} from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import HelloContainer from './HelloContainer';
import HelloWorld from '../components/HelloWorld';

const storeFake = (state) => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };
};

describe('<HelloContainer/>', () => {
  let wrapper;
  let component;
  let container;

  beforeEach(() => {
    // jest.resetAllMocks();

    const store = storeFake({});

    wrapper = mount(
        <Provider store={store}>
          <HelloContainer/>
        </Provider>,
    );

    container = wrapper.find(HelloContainer);
    component = container.find(HelloWorld);
  });

  it('should render container and component', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  // https://medium.com/@linmic/writing-tests-for-react-redux-containers-5d01083ecfc4
  // https://medium.com/@visualskyrim/test-your-redux-container-with-enzyme-a0e10c0574ec

  // it('should map state to props', () => {
  //   const expectedPropKeys = [
  //     'subject',
  //     'updateSubject',
  //     'salutation',
  //   ];
  //
  //   expect(component.props()).toEqual(expect.arrayContaining(expectedPropKeys));
  // });

  // it('should map dispatch to props', () => {
  //   const expectedPropKeys = ['load'];
  //
  //   expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  // });
});
