const router = require('express').Router();
const {
	getDisable,
	getEnable,
	getStatus,
} = require('../controller/admin-attendance');

router.get('/enable', getEnable);
router.get('/disable', getDisable);
router.get('/status', getStatus);

module.exports = router;
