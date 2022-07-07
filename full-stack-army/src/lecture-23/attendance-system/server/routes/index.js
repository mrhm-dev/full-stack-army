const router = require('express').Router();
const authRoutes = require('./auth');

router.use('/api/v1/auth', authRoutes);

module.exports = router;
