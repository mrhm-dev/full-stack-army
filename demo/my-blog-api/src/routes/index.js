const router = require('express').Router();
const { controllers: articleController } = require('../api/v1/article');
const { controllers: articleControllerV2 } = require('../api/v2/article');

router
	.route('/api/v1/articles')
	.get(articleController.findAllItems)
	.post(articleController.create);

router
	.route('/api/v1/articles/:id')
	.get(articleController.findSingleItem)
	.put(articleController.updateItem)
	.patch(articleController.updateItemPatch)
	.delete(articleController.removeItem);

router.route('/api/v2/articles/:id').patch(articleControllerV2.updateItemPatch);

module.exports = router;
