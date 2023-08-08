const defaults = require('../config/defaults');
const { generateQueryString } = require('./qs');

const getPagination = ({
	totalItems = defaults.totalItems,
	limit = defaults.limit,
	page = defaults.page,
}) => {
	const totalPage = Math.ceil(totalItems / limit);

	const pagination = {
		page,
		limit,
		totalItems,
		totalPage,
	};

	if (page < totalPage) {
		pagination.next = page + 1;
	}

	if (page > 1) {
		pagination.prev = page - 1;
	}

	return pagination;
};

const getHATEOASForAllItems = ({
	url = '/',
	path = '',
	query = {},
	hasNext = false,
	hasPrev = false,
	page = 1,
}) => {
	const links = {
		self: url,
	};

	if (hasNext) {
		const queryStr = generateQueryString({ ...query, page: page + 1 });
		links.next = `${path}?${queryStr}`;
	}
	if (hasPrev) {
		const queryStr = generateQueryString({ ...query, page: page - 1 });
		links.prev = `${path}?${queryStr}`;
	}

	return links;
};

const getTransformedItems = ({ items = [], selection = [], path = '/' }) => {
	if (!Array.isArray(items) || !Array.isArray(selection)) {
		throw new Error('Invalid selection');
	}

	if (selection.length === 0) {
		return items.map((item) => ({ ...item, link: `${path}/${item.id}` }));
	}

	return items.map((item) => {
		const result = {};
		selection.forEach((key) => {
			result[key] = item[key];
		});
		result.link = `${path}/${item.id}`;
		return result;
	});
};

module.exports = {
	getPagination,
	getTransformedItems,
	getHATEOASForAllItems,
};
