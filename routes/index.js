const express = require('express');
const router = express.Router();


router.use('/users', require('./users'));
router.use('/reservations', require('./reservations'));
router.use('/auth', require ('./oauth'));

module.exports = router;