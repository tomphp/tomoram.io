'use strict';

import {SET_SUBJECT, setSubject} from './hello';

test('setSubject returns the payload', () => {
  expect(setSubject('my friend')).toEqual({
    type: SET_SUBJECT,
    subject: 'my friend',
  });
});
