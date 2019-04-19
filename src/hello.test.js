import {handler} from './hello';

test('handler returns subject of world', async () => {
  const response = await handler(null);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body)).toEqual({subject: 'world'});
  expect(response.headers).toEqual({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
});
