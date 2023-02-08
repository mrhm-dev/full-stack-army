const { add, isEven } = require('../app');

test('should return correct addition value', () => {
	expect(add(2, 3)).toEqual(5);
	expect(add(3, 8)).toEqual(11);
	expect(add(3, 80)).toEqual(83);
});

test('should throw an error if arguments are not number', () => {
	expect(() => add('A', 10)).toThrow();
});

test('isEven() should return true', () => {
	expect(isEven(10)).toBe(true);
	expect(isEven(40)).toBe(true);
	expect(isEven(22)).toBe(true);
	expect(isEven(98)).toBe(true);
});

test('isEven() should return false', () => {
	expect(isEven(1)).toBe(false);
	expect(isEven(99)).toBe(false);
	expect(isEven(121)).toBe(false);
	expect(isEven(75)).toBe(false);
});

test('isEven() should throw an error', () => {
	expect(() => isEven('10')).toThrow();
	expect(() => isEven(true)).toThrow();
	expect(() => isEven(false)).toThrow();
	expect(() => isEven(null)).toThrow();
	expect(() => isEven(undefined)).toThrow();
	expect(() => isEven({})).toThrow();
	expect(() => isEven([])).toThrow();
});
