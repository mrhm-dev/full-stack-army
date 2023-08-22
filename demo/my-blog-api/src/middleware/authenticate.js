const authenticate = (req, _res, next) => {
	req.user = {
		id: '64c935462125de32cc714313',
		name: 'Anamul Haque',
		email: 'anamul@gmail.com',
		role: 'user',
	};
	next();
};

module.exports = authenticate;
