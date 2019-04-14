import {handler} from './hello';

test('handler returns subject of world', async () => {
  expect(await handler(null)).toEqual({subject: 'world'});
});
