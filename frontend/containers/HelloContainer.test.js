'use strict';

import {createMockStore} from 'redux-test-utils';
import {shallowWithStore} from 'enzyme-redux';
import {mount} from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import HelloContainer from './HelloContainer';
import HelloWorld from '../components/HelloWorld';
import {SET_SUBJECT} from '../actions/hello';

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

  it('should map state to props', () => {
    const expectedProps = {
      subject: null,
      salutation: 'Hello',
    };

    expect(component.props()).toEqual(expect.objectContaining(expectedProps));
  });

  it('should map the dispatch to the props', (done) => {
    const store = createMockStore();
    const component = shallowWithStore(<HelloContainer/>, store);

    const button = component.dive().find('.get-subject');

    button.simulate('click');

    // Testing a thunked action this way feels wrong
    fetch.mockResponse(JSON.stringify({subject: 'moon'}));
    const actions = store.getActions();
    const action = actions[0];
    action((payload) => {
      expect(payload).toEqual({type: SET_SUBJECT, subject: 'moon'});
      done();
    });

    // expect(store.isActionDispatched({})).toBe(true);
  });
});
