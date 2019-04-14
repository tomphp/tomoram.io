'use strict';

import {SET_SUBJECT} from '../actions/hello';

const initialState = null;

export function hello(state=initialState, action) {
  if (action.type === SET_SUBJECT) {
    return action.subject;
  } else {
    return state;
  }
}
