'use strict';

import {combineReducers} from 'redux';
import {hello} from './hello';

const app = combineReducers({hello});

export default app;
