import {handler} from './hello';

test('someting', async () => {
  expect(await handler(null)).toEqual({value: 'world'});
});
