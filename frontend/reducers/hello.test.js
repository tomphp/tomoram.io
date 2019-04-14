'use strict';

import {hello} from './hello';
import {setSubject} from '../actions/hello';

const UNKNOWN_ACTION = {type: 'unknown action'};

test('initial state of hello is null', () => {
  expect(hello(undefined, UNKNOWN_ACTION)).toBe(null);
});

test('hello defaults to not altering the state', () => {
  expect(hello('current state', UNKNOWN_ACTION)).toBe('current state');
});

test('hello updates the state on a SET_SUBJECT action', () => {
  expect(hello(null, setSubject('people'))).toBe('people');
});
