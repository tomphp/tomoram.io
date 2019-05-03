'use strict';

import {fetchLatest} from './fetcher';
import parse from './parser';

const mediumUsername = process.env.MEDIUM_USERNAME;

export async function handler() {
  const json = await fetchLatest(mediumUsername);

  const parsed = parse(json);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(parsed),
  };
}
