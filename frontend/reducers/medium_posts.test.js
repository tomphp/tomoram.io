'use strict';

import {mediumPosts} from './medium_posts';
import {SET_MEDIUM_POSTS} from '../actions/medium_posts';

const UNKNOWN_ACTION = {type: 'unknown action'};

describe('reducers/hello', () => {
  it('initials the state to null', () => {
    expect(mediumPosts(undefined, UNKNOWN_ACTION))
        .toEqual({loaded: false, posts: []});
  });

  it('does not alter the state for unknown actions', () => {
    expect(mediumPosts('current state', UNKNOWN_ACTION))
        .toBe('current state');
  });

  it('updates the state on a SET_MEDIUM_POSTS action', () => {
    const action = {type: SET_MEDIUM_POSTS, posts: 'posts'};

    expect(mediumPosts(null, action))
        .toEqual({loaded: true, posts: 'posts'});
  });
});

