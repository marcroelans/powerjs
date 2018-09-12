import {
  isArray,
  isBoolean,
  isNull,
  isString,
  isObject
} from '../src/utils/is';

/* isArray */
test('checks if [] is an array', () => {
  expect(isArray([])).toBe(true);
});

test('checks if a string is an array', () => {
  expect(isArray('hallo world')).toBe(false);
});

test('checks if an object is an array', () => {
  expect(isArray({})).toBe(false);
});
