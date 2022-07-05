function error(msg = 'Something Went Wrong', status = 500) {
	const e = new Error(msg);
	e.status = status;
	return e;
}

module.exports = error;
