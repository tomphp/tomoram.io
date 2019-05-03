'use strict';

import {fetch} from 'cross-fetch';

export async function fetchLatest(username) {
  const url = `https://medium.com/@${username}/latest?format=json`;
  const response = await fetch(url);

  const body = await response.text();

  const json = body.replace(/^[^{]*/, '');

  return JSON.parse(json);
}
