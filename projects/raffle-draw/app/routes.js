const router = require('express').Router();

router.use('/api/v1/tickets', require('../routes/ticket'));

router.get('/health', (_req, res) => {
	res.status(200).json({ message: 'Success' });
});

module.exports = router;
