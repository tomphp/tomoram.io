'use strict';

import fetch from 'cross-fetch';

export const SET_SUBJECT = 'SET_SUBJECT';

export function setSubject(apiUrl) {
  return async function(dispatch) {
    const response = await fetch(`${apiUrl}/hello`);

    const json = await response.json();

    dispatch({
      type: SET_SUBJECT,
      subject: json.subject,
    });
  };
}
