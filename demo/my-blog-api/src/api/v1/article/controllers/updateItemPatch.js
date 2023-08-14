const articleService = require('../../../../lib/article');

const updateItemPatch = async (req, res, next) => {
	const { id } = req.params;

	try {
		const article = await articleService.updateProperties(id, req.body);

		const response = {
			code: 200,
			message: 'Article updated successfully',
			data: article,
			links: {
				self: `/articles/${article.id}`,
			},
		};

		res.status(200).json(response);
	} catch (e) {
		next(e);
	}
};

module.exports = updateItemPatch;
