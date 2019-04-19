'use strict';

import {setSubject} from './hello';


describe('setSubject', () => {
  const action = setSubject('http://api.example.com');
  fetch.mockResponse(JSON.stringify({subject: 'moon'}));

  it('fetches the data and dispatches the action', (done) => {
    action((payload) => {
      expect(payload).toEqual({type: 'SET_SUBJECT', subject: 'moon'});
      done();
    });

    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.calls[0][0]).toBe('http://api.example.com/hello');
  });
});
