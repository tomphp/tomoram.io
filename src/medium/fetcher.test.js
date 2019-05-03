import {fetchLatest} from './fetcher';

describe('medium/fetcher', () => {
  describe('fetchLatest', () => {
    const bullshit = '])}while(1);</x>';
    const response = {content: 'made up content'};

    fetch.mockResponse(bullshit + JSON.stringify(response));

    xit('fetches the data and dispatches the action', async () => {
      const result = await fetchLatest('username');

      expect(result).toEqual(response);

      expect(fetch.mock.calls.length).toBe(1);
      expect(fetch.mock.calls[0][0]).toBe(`https://medium.com/@username/latest?format=json`);
    });
  });
});
