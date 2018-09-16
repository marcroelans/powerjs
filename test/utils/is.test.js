import {
  isArray,
  isBoolean,
  isNull,
  isString,
  isObject,
  isHtml,
  isFunction,
  isEvent,
  isElementAttribute,
  isUndefined,
  isError,
  isDocument,
  isRegExp,
  isWindow,
} from '../../src/utils/is';

import { createElement as h } from "../../src/core/createElement/createElement";

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

/* is HTML Element */
test('tests validator if an HTML ELement is an HTML Element', () => {
  expect(isHtml(h('div'))).toBe(true);
});

test('tests validator if an Object is not an HTML Element', () => {
  expect(isHtml({test: 'test'})).toBe(false);
});

test('tests validator if an Array is not an HTML Element', () => {
  expect(isHtml(['sadasd', 234234])).toBe(false);
});

test('tests validator if a String is not an HTML Element', () => {
  expect(isHtml('Test')).toBe(false);
});

test('tests validator if a Number is not an HTML Element', () => {
  expect(isHtml(23423)).toBe(false);
});

/* isElementAttribute */
test('tests validator if data-test is an HTML Element Attribute', () => {

  const element = h('div', {'data-test': 'test'});

  expect(isElementAttribute(element, 'data-test')).toBe(true);
});

test('tests validator if test-test is not HTML Element Attribute', () => {

  const element = h('div', {'test-test': 'test'});

  expect(isElementAttribute(element, 'test-test')).toBe(false);
});

/* isUndefined */
test('tests validator if undefined is undefined', () => {
  expect(isUndefined(undefined)).toBe(true);
});

test('tests validator if null is not undefined', () => {
  expect(isUndefined(null)).toBe(false);
});

test('tests validator if string is not undefined', () => {
  expect(isUndefined('Hello World')).toBe(false);
});

test('tests validator if number is not undefined', () => {
  expect(isUndefined(999)).toBe(false);
});

test('tests validator if an array is not undefined', () => {
  expect(isUndefined([90, 'Test'])).toBe(false);
});

test('tests validator if an object is not undefined', () => {
  expect(isUndefined({test: 21})).toBe(false);
});

/* isError */
test('tests validator if an Error is an Error', () => {
  expect(isError(new Error())).toBe(true);
});

test('tests validator if Null is not an Error', () => {
  expect(isError(null)).toBe(false);
});

test('tests validator if string is not an Error', () => {
  expect(isError('test')).toBe(false);
});

test('tests validator if number is not an Error', () => {
  expect(isError(100)).toBe(false);
});

test('tests validator if an array is not an Error', () => {
  expect(isError([234, 234])).toBe(false);
});

test('tests validator if an object is not an Error', () => {
  expect(isError({test: 'test'})).toBe(false);
});

/* isRegExp */
test('tests validator if literal RegExp is a RegExp', () => {
  const myReg = /ab+c/i;
  expect(isRegExp(myReg)).toBe(true);
});

test('tests validator if constructor RegExp is a RegExp', () => {
  const myReg = new RegExp("ab+c", "i");
  expect(isRegExp(myReg)).toBe(true);
});

test('tests validator if null is not a RegExp', () => {
  expect(isRegExp(null)).toBe(false);
});

test('tests validator if undefined is not a RegExp', () => {
  expect(isRegExp(undefined)).toBe(false);
});

test('tests validator if an array is not a RegExp', () => {
  expect(isRegExp([undefined, null])).toBe(false);
});

test('tests validator if an object is not a RegExp', () => {
  expect(isRegExp({test: 'test'})).toBe(false);
});

/* isWindow */
test('tests validator if window is a window', () => {
  expect(isWindow(window)).toBe(true);
});

test('tests validator if null is not a window', () => {
  expect(isWindow(null)).toBe(false);
});

test('tests validator if undefined is not a window', () => {
  expect(isWindow(undefined)).toBe(false);
});

test('tests validator if an array is not a window', () => {
  expect(isWindow(['sdf',234])).toBe(false);
});

test('tests validator if an object is not a window', () => {
  expect(isWindow({test: 'test'})).toBe(false);
});
