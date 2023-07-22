const add = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error('Invalid Argument Type');
	}
	return a + b;
};

const isEven = (n) => {
	if (typeof n !== 'number') {
		throw new Error('Invalid Argument Type');
	}
	return n % 2 === 0;
};

module.exports = {
	add,
	isEven,
};
