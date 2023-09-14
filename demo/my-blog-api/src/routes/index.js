const router = require('express').Router();
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');
const ownership = require('../middleware/ownership');
const { controllers: authController } = require('../api/v1/auth');
const { controllers: articleController } = require('../api/v1/article');
const { controllers: articleControllerV2 } = require('../api/v2/article');
const { controllers: userController } = require('../api/v1/user');

// Auth routes
router
  .post('/api/v1/auth/register', authController.register)
  .post('/api/v1/auth/login', authController.login);

// Article routes
router
  .route('/api/v1/articles')
  .get(articleController.findAllItems)
  .post(authenticate, authorize(['admin', 'user']), articleController.create);

router
  .route('/api/v1/articles/:id')
  .get(articleController.findSingleItem)
  .put(authenticate, authorize(['user', 'admin']), articleController.updateItem)
  .patch(
    authenticate,
    authorize(['user', 'admin']),
    articleController.updateItemPatch
  )
  .delete(
    authenticate,
    authorize(['admin', 'user']),
    ownership('Article'),
    articleController.removeItem
  );

router
  .route('/api/v2/articles/:id')
  .patch(authenticate, articleControllerV2.updateItemPatch);

// User routes
router
  .route('/api/v1/users')
  .get(authenticate, authorize(['admin']), userController.findAllItems)
  .post(authenticate, authorize(['admin']), userController.create);

module.exports = router;
