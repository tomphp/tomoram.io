import {SET_SUBJECT} from '../actions/hello';

const initialState = null;

export function hello(state=initialState, action) {
  switch (action.type) {
    case SET_SUBJECT:
      return action.subject;
    default:
      return state;
  }
}
