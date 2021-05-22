'use strict';
const router = require('express').Router();

router.post('/validate-pin', (req, res) => res.json({ message: 'valid pin' }));

module.exports = router;
