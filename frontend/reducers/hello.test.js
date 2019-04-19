'use strict';

import {hello} from './hello';
import {SET_SUBJECT} from '../actions/hello';

const UNKNOWN_ACTION = {type: 'unknown action'};

describe('reducers/hello', () => {
  it('initials the state to null', () => {
    expect(hello(undefined, UNKNOWN_ACTION)).toBe(null);
  });

  it('does not alter the state for unknown actions', () => {
    expect(hello('current state', UNKNOWN_ACTION)).toBe('current state');
  });

  it('updates the state on a SET_SUBJECT action', () => {
    expect(hello(null, {type: SET_SUBJECT, subject: 'people'}))
        .toBe('people');
  });
});

