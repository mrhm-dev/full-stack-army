const Article = require('../../model/Article');
const { notFound, badRequest } = require('../../utils/error');

// these paths are not permitted
const restrictedPaths = ['id', '_id', 'author', 'createdAt', 'updatedAt'];

const updateArticleV2 = async (id, operations = []) => {
	let article = await Article.findById(id);
	if (!article) {
		throw notFound();
	}

	for (let operation of operations) {
		const { op, path, value } = operation;
		if (restrictedPaths.includes(path)) {
			throw badRequest(`Path (${path}) not permitted`);
		}

		switch (op) {
			case 'replace':
				article[path] = value;
				break;
			case 'add':
				console.log('ADD Operation');
				article.set(path, value);
				break;
			// case 'remove':
			// 	delete article[path];
			// 	break;
			default:
				throw badRequest(`Invalid Operation: ${op}`);
		}
	}

	console.log('Operation Done');

	await article.save();
	return article._doc;
};

module.exports = updateArticleV2;
