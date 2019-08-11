'use strict';

import {fetchPosts} from './medium_posts';


describe('fetchPosts', () => {
  const posts = [
    {
      id: 'bb61bdee8422',
      version: '5718dcaba97a',
      slug: 'tdd-a-new-transformation',
      title: 'TDD — A New Transformation',
      subtitle: 'In this article, I question whether there is a...',
    },
    {
      id: '53d677d4677f',
      version: '6d1271f5b8ae',
      slug: 'tdd-lookahead-refactoring',
      title: 'TDD — Lookahead Refactoring',
      subtitle: 'In this article, I want to consider a situation...',
    },
  ];
  const action = fetchPosts('http://api.example.com');
  fetch.mockResponse(JSON.stringify(posts));

  it('fetches the data and dispatches the action', (done) => {
    action((payload) => {
      expect(payload).toEqual({
        type: 'SET_MEDIUM_POSTS',
        posts: posts,
      });
      expect(fetch.mock.calls.length).toBe(1);
      expect(fetch.mock.calls[0][0]).toBe('http://api.example.com/medium');
      done();
    });
  });
});
