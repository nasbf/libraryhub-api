const express = require('express');
const router = express.Router();


router.use('/users', require('./users'));
router.use('/reservations', require('./reservations'));

router.use('/auth', require ('./auth'));
router.use('/rentals', require('./rentals'));
router.use('/books', require('./books'));

module.exports = router;