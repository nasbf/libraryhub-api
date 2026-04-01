const express = require("express");
const router = express.Router();
const reservationsController = require('../controllers/reservations');

// GET all users
router.get("/", reservationsController.getAll);
router.post("/", reservationsController.createReservation);
router.put("/:id", reservationsController.updateReservation);
router.delete("/:id", reservationsController.deleteReservation);





module.exports = router