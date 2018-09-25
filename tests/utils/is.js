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
  isNumeric,
  isUndefined,
  isError,
  isDocument,
  isRegExp,
  isWindow,
} from '../../src/utils/is';

import { createElement as h } from "../../src/core/createElement/createElement";

describe('Utils: is', () => {
  describe('#isArray', () => {
    it('should validate if [] is an array', () => {
      expect(isArray([])).toBe(true);
    });

    it('should validate if a string is not an array', () => {
      expect(isArray('hallo world')).toBe(false);
    });

    it('should validate if an object is not an array', () => {
      expect(isArray({})).toBe(false);
    });

    it('should validate if null is not an array', () => {
      expect(isArray(null)).toBe(false);
    });

    it('should validate if undefined is not an array', () => {
      expect(isArray(undefined)).toBe(false);
    });

    it('should validate if a number is an not array', () => {
      expect(isArray(9999999)).toBe(false);
    });
  });

  describe('#isBoolean', () => {
    it('should validate if a true is a boolean', () => {
      expect(isBoolean(true)).toBe(true);
    });

    it('should validate if a false is a boolean', () => {
      expect(isBoolean(false)).toBe(true);
    });

    it('should validate if a number is not a boolean', () => {
      expect(isBoolean(2323)).toBe(false);
    });

    it('should validate if a string is not a boolean', () => {
      expect(isBoolean('hello world')).toBe(false);
    });

    it('should validate if a null is not a boolean', () => {
      expect(isBoolean(null)).toBe(false);
    });

    it('should validate if a undefined is not a boolean', () => {
      expect(isBoolean(undefined)).toBe(false);
    });

    it('should validate if an array is not a boolean', () => {
      expect(isBoolean(['one', 'two'])).toBe(false);
    });

    it('should validate if an object is not a boolean', () => {
      expect(isBoolean({test: 'anothertest'})).toBe(false);
    });
  });

  describe('#isNull', () => {
    it('should validate if an null is null', () => {
      expect(isNull(null)).toBe(true);
    });

    it('should validate if undefined is not null', () => {
      expect(isNull(undefined)).toBe(false);
    });

    it('should validate if an array is not null', () => {
      expect(isNull([])).toBe(false);
    });

    it('should validate if an object is not null', () => {
      expect(isNull({})).toBe(false);
    });

    it('should validate if a string is not null', () => {
      expect(isNull('hello world')).toBe(false);
    });

    it('should validate if a number is not null', () => {
      expect(isNull(234234)).toBe(false);
    });
  });

  describe('#isString', () => {
    it('should validate if a string is a string', () => {
      expect(isString('It´s a string')).toBe(true);
    });

    it('should validate if undefined is not a string', () => {
      expect(isString(undefined)).toBe(false);
    });

    it('should validate if an array is not a string', () => {
      expect(isString([])).toBe(false);
    });

    it('should validate if an object is not a string', () => {
      expect(isString({})).toBe(false);
    });

    it('should validate if null is not a string', () => {
      expect(isString(null)).toBe(false);
    });

    it('should validate if a number is not a string', () => {
      expect(isString(234234)).toBe(false);
    });
  });

  describe('#isObject', () => {
    it('should validate if an object is an object', () => {
      expect(isObject({test: 'hello world'})).toBe(true);
    });

    it('should validate if a string is not an object', () => {
      expect(isObject('hello world')).toBe(false);
    });

    it('should validate if a number is not an object', () => {
      expect(isObject(234234)).toBe(false);
    });

    it('should validate if an array is not an object', () => {
      expect(isObject(['asd', 234])) .toBe(false);
    });

    it('should validate if null is not an object', () => {
      expect(isObject(null)).toBe(false);
    });

    it('should validate if undefined is not an object', () => {
      expect(isObject(undefined)).toBe(false);
    });
  });

  describe('#isFunction', () => {
    it('should validate if an arrow function is a function', () => {
      expect(isFunction( () => {} )).toBe(true);
    });

    it('should validate if a function is a function', () => {
      expect(isFunction( function test() {} )).toBe(true);
    });

    it('should validate if a function with a return statement is a function', () => {
      expect(isFunction( function test() { return false; } )).toBe(true);
    });

    it('should validate if an object is not a function', () => {
      expect(isFunction( {test: 2} )).toBe(false);
    });

    it('should validate if an array is not a function', () => {
      expect(isFunction( ['3234', 'asdasd'] )).toBe(false);
    });

    it('should validate if a number is not a function', () => {
      expect(isFunction( 2 )).toBe(false);
    });

    it('should validate if a string is not a function', () => {
      expect(isFunction( 'sdf' )).toBe(false);
    });
  });

  describe('#isEvent', () => {
    it('should validate if click is an event', () => {
      expect(isEvent( 'click' )).toBe(true);
    });

    it('should validate if onclick is an event', () => {
      expect(isEvent( 'onclick' )).toBe(true);
    });

    it('should validate if isclick is not an event', () => {
      expect(isEvent( 'isclick' )).toBe(false);
    });

    it('should validate if onfail is not an event', () => {
      expect(isEvent( 'onfail' )).toBe(false);
    });
  });

  describe('#isHtml', () => {
    it('should validate if an HTML ELement is an HTML Element', () => {
      expect(isHtml(h('div'))).toBe(true);
    });

    it('should validate if an Object is not an HTML Element', () => {
      expect(isHtml({test: 'test'})).toBe(false);
    });

    it('should validate if an Array is not an HTML Element', () => {
      expect(isHtml(['sadasd', 234234])).toBe(false);
    });

    it('should validate if a String is not an HTML Element', () => {
      expect(isHtml('Test')).toBe(false);
    });

    it('should validate if a Number is not an HTML Element', () => {
      expect(isHtml(23423)).toBe(false);
    });
  });

  describe('#isElementAttribute', () => {
    it('should validate if data-test is an HTML Element Attribute', () => {

      const element = h('div', {'data-test': 'test'});

      expect(isElementAttribute(element, 'data-test')).toBe(true);
    });

    it('should validate if test-test is not HTML Element Attribute', () => {

      const element = h('div', {'test-test': 'test'});

      expect(isElementAttribute(element, 'test-test')).toBe(false);
    });
  });

  describe('#isUndefined', () => {
    it('should validate if undefined is undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
    });

    it('should validate if null is not undefined', () => {
      expect(isUndefined(null)).toBe(false);
    });

    it('should validate if string is not undefined', () => {
      expect(isUndefined('Hello World')).toBe(false);
    });

    it('should validate if number is not undefined', () => {
      expect(isUndefined(999)).toBe(false);
    });

    it('should validate if an array is not undefined', () => {
      expect(isUndefined([90, 'Test'])).toBe(false);
    });

    it('should validate if an object is not undefined', () => {
      expect(isUndefined({test: 21})).toBe(false);
    });
  });

  describe('#isError', () => {
    it('should validate if an Error is an Error', () => {
      expect(isError(new Error())).toBe(true);
    });

    it('should validate if Null is not an Error', () => {
      expect(isError(null)).toBe(false);
    });

    it('should validate if string is not an Error', () => {
      expect(isError('test')).toBe(false);
    });

    it('should validate if number is not an Error', () => {
      expect(isError(100)).toBe(false);
    });

    it('should validate if an array is not an Error', () => {
      expect(isError([234, 234])).toBe(false);
    });

    it('should validate if an object is not an Error', () => {
      expect(isError({test: 'test'})).toBe(false);
    });
  });

  describe('#isRegExp', () => {
    it('should validate if literal RegExp is a RegExp', () => {
      const myReg = /ab+c/i;
      expect(isRegExp(myReg)).toBe(true);
    });

    it('should validate if constructor RegExp is a RegExp', () => {
      const myReg = new RegExp("ab+c", "i");
      expect(isRegExp(myReg)).toBe(true);
    });

    it('should validate if null is not a RegExp', () => {
      expect(isRegExp(null)).toBe(false);
    });

    it('should validate if undefined is not a RegExp', () => {
      expect(isRegExp(undefined)).toBe(false);
    });

    it('should validate if an array is not a RegExp', () => {
      expect(isRegExp([undefined, null])).toBe(false);
    });

    it('should validate if an object is not a RegExp', () => {
      expect(isRegExp({test: 'test'})).toBe(false);
    });
  });

  describe('#isWindow', () => {
    it('should validate if window is a window', () => {
      expect(isWindow(window)).toBe(true);
    });

    it('should validate if null is not a window', () => {
      expect(isWindow(null)).toBe(false);
    });

    it('should validate if undefined is not a window', () => {
      expect(isWindow(undefined)).toBe(false);
    });

    it('should validate if an array is not a window', () => {
      expect(isWindow(['sdf',234])).toBe(false);
    });

    it('should validate if an object is not a window', () => {
      expect(isWindow({test: 'test'})).toBe(false);
    });
  });

  describe('#isNumeric', () => {
    it('should validate the passed value is numerical (string float)', () => {
      expect(isNumeric('1.2')).toBe(true);
    });

    it('should validate the passed value is numerical (string number)', () => {
      expect(isNumeric('2')).toBe(true);
    });

    it('should validate the passed value is numerical (float)', () => {
      expect(isNumeric(2.2)).toBe(true);
    });

    it('should validate the passed value is numerical (number)', () => {
      expect(isNumeric(2)).toBe(true);
    });

    it('should handle non-numerical values correctly', () => {
      expect(isNumeric('a')).toBe(false);
      expect(isNumeric('ax3')).toBe(false);
      expect(isNumeric('')).toBe(false);
      expect(isNumeric(undefined)).toBe(false);
      expect(isNumeric(null)).toBe(false);
      expect(isNumeric('1000d')).toBe(false);
      expect(isNumeric('[]')).toBe(false);
      expect(isNumeric('{}')).toBe(false);
    });
  });
});
