'use strict';

import jestFetchMock from 'jest-fetch-mock';

global.fetch = jestFetchMock;
