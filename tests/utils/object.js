import { cloneObject, deepcloneObject } from '../../src/utils/object';

describe('Utils → object', () => {
  describe('#cloneObject', () => {
    it('should clone an object', () => {
      const testObject = {
        one: 1,
        two: 2
      };

      const clonedObject = cloneObject(testObject);

      expect(clonedObject).toEqual(testObject);
    });

    it('should test clone with different objects ', () => {
      const testObject = {
        one: 1,
        two: {
          test: 1
        }
      };
      const clonedObject = cloneObject(testObject);

      expect(clonedObject).not.toEqual({ three: 23, four: 2 });
    });
  });
});
