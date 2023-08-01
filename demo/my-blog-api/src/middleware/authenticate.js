const authenticate = (req, _res, next) => {
	req.user = {
		id: 999,
		name: 'HM Nayem',
	};
	next();
};

module.exports = authenticate;
