'use strict';

import {combineReducers} from 'redux';
import {hello} from './hello';
import {mediumPosts} from './medium_posts';

const app = combineReducers({mediumPosts, hello});

export default app;
