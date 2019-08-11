'use strict';

import {SET_MEDIUM_POSTS} from '../actions/medium_posts';

const initialState = {loaded: false, posts: []};

export function mediumPosts(state=initialState, action) {
  switch (action.type) {
    case SET_MEDIUM_POSTS:
      return {loaded: true, posts: action.posts};
    default:
      return state;
  }
}
