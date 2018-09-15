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
} from '../../src/utils/is';

/* isArray */
test('tests validator if [] is an array', () => {
  expect(isArray([])).toBe(true);
});

test('tests validator if a string is not an array', () => {
  expect(isArray('hallo world')).toBe(false);
});

test('tests validator if an object is not an array', () => {
  expect(isArray({})).toBe(false);
});

test('tests validator if null is not an array', () => {
  expect(isArray(null)).toBe(false);
});

test('tests validator if undefined is not an array', () => {
  expect(isArray(undefined)).toBe(false);
});

test('tests validator if a number is an not array', () => {
  expect(isArray(9999999)).toBe(false);
});

/* isBoolean */

test('tests validator if a true is a boolean', () => {
  expect(isBoolean(true)).toBe(true);
});

test('tests validator if a false is a boolean', () => {
  expect(isBoolean(false)).toBe(true);
});

test('tests validator if a number is not a boolean', () => {
  expect(isBoolean(2323)).toBe(false);
});

test('tests validator if a string is not a boolean', () => {
  expect(isBoolean('hello world')).toBe(false);
});

test('tests validator if a null is not a boolean', () => {
  expect(isBoolean(null)).toBe(false);
});

test('tests validator if a undefined is not a boolean', () => {
  expect(isBoolean(undefined)).toBe(false);
});

test('tests validator if an array is not a boolean', () => {
  expect(isBoolean(['one', 'two'])).toBe(false);
});

test('tests validator if an object is not a boolean', () => {
  expect(isBoolean({test: 'anothertest'})).toBe(false);
});

/* isNull */

test('tests validator if an null is null', () => {
  expect(isNull(null)).toBe(true);
});

test('tests validator if undefined is not null', () => {
  expect(isNull(undefined)).toBe(false);
});

test('tests validator if an array is not null', () => {
  expect(isNull([])).toBe(false);
});

test('tests validator if an object is not null', () => {
  expect(isNull({})).toBe(false);
});

test('tests validator if a string is not null', () => {
  expect(isNull('hello world')).toBe(false);
});

test('tests validator if a number is not null', () => {
  expect(isNull(234234)).toBe(false);
});

/* isString */

test('tests validator if a string is a string', () => {
  expect(isString('It´s a string')).toBe(true);
});

test('tests validator if undefined is not a string', () => {
  expect(isString(undefined)).toBe(false);
});

test('tests validator if an array is not a string', () => {
  expect(isString([])).toBe(false);
});

test('tests validator if an object is not a string', () => {
  expect(isString({})).toBe(false);
});

test('tests validator if null is not a string', () => {
  expect(isString(null)).toBe(false);
});

test('tests validator if a number is not a string', () => {
  expect(isString(234234)).toBe(false);
});

/* is Object */

test('tests validator if an object is an object', () => {
  expect(isObject({test: 'hello world'})).toBe(true);
});

test('tests validator if a string is not an object', () => {
  expect(isObject('hello world')).toBe(false);
});

test('tests validator if a number is not an object', () => {
  expect(isObject(234234)).toBe(false);
});

test('tests validator if an array is not an object', () => {
  expect(isObject(['asd', 234])) .toBe(false);
});

test('tests validator if null is not an object', () => {
  expect(isObject(null)).toBe(false);
});

test('tests validator if undefined is not an object', () => {
  expect(isObject(undefined)).toBe(false);
});

/* is Function */

test('tests validator if an arrow function is a function', () => {
  expect(isFunction( () => {} )).toBe(true);
});

test('tests validator if a function is a function', () => {
  expect(isFunction( function test() {} )).toBe(true);
});

test('tests validator if a function with a return statement is a function', () => {
  expect(isFunction( function test() { return false; } )).toBe(true);
});

test('tests validator if an object is not a function', () => {
  expect(isFunction( {test: 2} )).toBe(false);
});

test('tests validator if an array is not a function', () => {
  expect(isFunction( ['3234', 'asdasd'] )).toBe(false);
});

test('tests validator if a number is not a function', () => {
  expect(isFunction( 2 )).toBe(false);
});

test('tests validator if a string is not a function', () => {
  expect(isFunction( 'sdf' )).toBe(false);
});

/* is Event */

test('tests validator if click is an event', () => {
  expect(isEvent( 'click' )).toBe(true);
});

test('tests validator if onclick is an event', () => {
  expect(isEvent( 'onclick' )).toBe(true);
});

test('tests validator if isclick is not an event', () => {
  expect(isEvent( 'isclick' )).toBe(false);
});

test('tests validator if onfail is not an event', () => {
  expect(isEvent( 'onfail' )).toBe(false);
});
