const express = require("express");
const router = express.Router();
const usersController = require('../controllers/users');

// GET all users
router.get("/", usersController.getAll);

module.exports = router
