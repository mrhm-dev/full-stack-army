const getWords = (sentence) => {
	if (typeof sentence !== 'string') {
		throw new Error('Invalid Argument Type');
	}

	const words = sentence.split(' ');
	if (words.length === 1) return sentence;

	return words;
};

module.exports = {
	getWords,
};
