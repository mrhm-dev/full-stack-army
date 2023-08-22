const notFound = (msg = 'Resource not found') => {
	const error = new Error(msg);
	error.status = 404;
	return error;
};

const badRequest = (msg = 'Bad Request') => {
	const error = new Error(msg);
	error.status = 400;
	return error;
};

module.exports = {
	notFound,
	badRequest,
};
