import {
  isArray,
  isBoolean,
  isNull,
  isString,
  isObject,
  isHtml,
  isFunction,
  isEvent,
  isElementAttribute
} from '../src/utils/is';

/* isArray */
test('checks if [] is an array', () => {
  expect(isArray([])).toBe(true);
});

test('checks if a string is not an array', () => {
  expect(isArray('hallo world')).toBe(false);
});

test('checks if an object is not an array', () => {
  expect(isArray({})).toBe(false);
});

test('checks if null is not an array', () => {
  expect(isArray(null)).toBe(false);
});

test('checks if undefined is not an array', () => {
  expect(isArray(undefined)).toBe(false);
});

test('checks if a number is an not array', () => {
  expect(isArray(9999999)).toBe(false);
});

/* isBoolean */

test('checks if a true is a boolean', () => {
  expect(isBoolean(true)).toBe(true);
});

test('checks if a false is a boolean', () => {
  expect(isBoolean(false)).toBe(true);
});

test('checks if a number is not a boolean', () => {
  expect(isBoolean(2323)).toBe(false);
});

test('checks if a string is not a boolean', () => {
  expect(isBoolean('hello world')).toBe(false);
});

test('checks if a null is not a boolean', () => {
  expect(isBoolean(null)).toBe(false);
});

test('checks if a undefined is not a boolean', () => {
  expect(isBoolean(undefined)).toBe(false);
});

test('checks if an array is not a boolean', () => {
  expect(isBoolean(['one', 'two'])).toBe(false);
});

test('checks if an object is not a boolean', () => {
  expect(isBoolean({test: 'anothertest'})).toBe(false);
});

/* isNull */

test('checks if an null is null', () => {
  expect(isNull(null)).toBe(true);
});

test('checks if undefined is not null', () => {
  expect(isNull(undefined)).toBe(false);
});

test('checks if an array is not null', () => {
  expect(isNull([])).toBe(false);
});

test('checks if an object is not null', () => {
  expect(isNull({})).toBe(false);
});

test('checks if a string is not null', () => {
  expect(isNull('hello world')).toBe(false);
});

test('checks if a number is not null', () => {
  expect(isNull(234234)).toBe(false);
});

/* isString */

test('checks if a string is a string', () => {
  expect(isString('It´s a string')).toBe(true);
});

test('checks if undefined is not a string', () => {
  expect(isString(undefined)).toBe(false);
});

test('checks if an array is not a string', () => {
  expect(isString([])).toBe(false);
});

test('checks if an object is not a string', () => {
  expect(isString({})).toBe(false);
});

test('checks if null is not a string', () => {
  expect(isString(null)).toBe(false);
});

test('checks if a number is not a string', () => {
  expect(isString(234234)).toBe(false);
});

/* is Object */

test('checks if an object is an object', () => {
  expect(isObject({test: 'hello world'})).toBe(true);
});

test('checks if a string is not an object', () => {
  expect(isObject('hello world')).toBe(false);
});

test('checks if a number is not an object', () => {
  expect(isObject(234234)).toBe(false);
});

test('checks if an array is not an object', () => {
  expect(isObject(['asd', 234])) .toBe(false);
});

test('checks if null is not an object', () => {
  expect(isObject(null)).toBe(false);
});

test('checks if undefined is not an object', () => {
  expect(isObject(undefined)).toBe(false);
});
