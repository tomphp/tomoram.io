'use strict';

export const SET_MEDIUM_POSTS = 'SET_MEDIUM_POSTS';

export function fetchPosts(apiUrl) {
  return async function(dispatch) {
    const response = await fetch(`${apiUrl}/medium`);
    const json = await response.json();

    dispatch({
      type: SET_MEDIUM_POSTS,
      posts: json,
    });
  };
}
