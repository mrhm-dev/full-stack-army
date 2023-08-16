const service = require('../../../../lib/article');

const updateItemPatch = async (req, res, next) => {
	console.log('Req.body', req.body);

	try {
		const article = await service.updateArticleV2(req.params.id, req.body);

		console.log('Operation Completed');

		res.status(200).json(article);
	} catch (e) {
		next(e);
	}
};

module.exports = updateItemPatch;
