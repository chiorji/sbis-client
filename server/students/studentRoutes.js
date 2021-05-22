const express = require('express');
const router = express.Router();
const { admission } = require('./studentMiddleware');
const ctl = require('./studentController');

router.post('/register', admission, ctl.admit);

module.exports = router;
