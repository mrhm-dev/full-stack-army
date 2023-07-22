const router = require('express').Router();

router.get('/', (_req, res) => {
    res.send('Hello World!');
});

// console.log(`PORT: ${process.env.PORT}`);

// check api health
router.get('/health', (_req, res) => {
    res.send('OK');
});

module.exports = router;