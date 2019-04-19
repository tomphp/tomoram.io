import {handler} from './hello';

describe('hello.handler', () => {
  describe('the response', () => {
    let response;

    beforeAll(async () => {
      response = await handler(null);
    });

    it('returns a 200 status code', async () => {
      expect(response.statusCode).toEqual(200);
    });

    it('returns the JSON body', () => {
      expect(response.headers['Content-Type']).toBe('application/json');
      expect(JSON.parse(response.body)).toEqual({subject: 'world'});
    });

    it('allows all CORS origins', () => {
      expect(response.headers['Access-Control-Allow-Origin']).toBe('*');
    });
  });
});
