const { getWords } = require('../src/getWords');

test('should throw an error if it is not a string', () => {
	expect(() => getWords(100)).toThrow();
	expect(() => getWords(true)).toThrow();
	expect(() => getWords(false)).toThrow();
	expect(() => getWords(100)).toThrow();
	expect(() => getWords(100)).toThrow();
	expect(() => getWords(['words'])).toThrow();
	expect(() => getWords({ name: 'words' })).toThrow();
});

test('should return the same string if the argument is a word', () => {
	expect(getWords('Nayem')).toBe('Nayem');
	expect(getWords('VSCode')).toBe('VSCode');
	expect(getWords('JavaScript')).toBe('JavaScript');
	expect(getWords('Jest')).toBe('Jest');
});

test('should return the array of string', () => {
	const words1 = getWords('HM Nayem');
	expect(words1).toHaveLength(2);
	expect(words1).toContain('Nayem');

	const words2 = getWords('Test Driven Development');
	expect(words2).toHaveLength(3);
	expect(words2).toContain('Test');
});
