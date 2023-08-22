const router = require('express').Router();
const { demoController } = require('./controller');

const myMiddleware = (req, res, next) => {
	next();
};

router.get('/path', myMiddleware, demoController);

module.exports = router;
