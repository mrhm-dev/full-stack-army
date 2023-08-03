const { Article } = require('../../model');

const findAll = ({
	page = 1,
	limit = 10,
	sortType = 'dsc',
	sortKey = 'updatedAt',
	search = '',
}) => {
	const sortStr = `${sortType === 'dsc' ? '-' : ''}${sortKey}`;
	const filter = {
		title: { $regex: search, $options: 'i' },
	};

	return Article.find(filter)
		.populate({ path: 'author', select: 'name' })
		.sort(sortStr)
		.skip(page * limit - limit)
		.limit(limit);
};

const count = ({ search = '' }) => {
	const filter = {
		title: { $regex: search, $options: 'i' },
	};

	return Article.count(filter);
};

const create = ({ title, body = '', cover = '', status = 'draft', author }) => {
	if (!title || !author) {
		const error = new Error('Invalid parameters');
		error.status = 400;
		throw error;
	}

	const article = new Article({
		title,
		body,
		cover,
		status,
		author: author.id,
	});
	return article.save();
};

module.exports = {
	findAll,
	create,
	count,
};
