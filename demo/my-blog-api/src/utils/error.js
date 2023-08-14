const notFound = (msg = 'Resource not found') => {
	const error = new Error(msg);
	error.status = 404;
	return error;
};

module.exports = {
	notFound,
};
