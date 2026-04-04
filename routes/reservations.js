const express = require("express");
const router = express.Router();
const reservationsController = require('../controllers/reservations');

/**
 * @swagger
 * tags:
 *   name: Reservations
 *   description: Library reservation management
 */

/**
 * @swagger
 * /reservations:
 *   get:
 *     summary: Get all reservations
 *     description: Retrieve a list of all reservations
 *     tags: [Reservations]
 *     responses:
 *       200:
 *         description: A list of reservations
 */
router.get("/", reservationsController.getAll);

/**
 * @swagger
 * /reservations:
 *   post:
 *     summary: Create a new reservation
 *     description: Add a new reservation to the system
 *     tags: [Reservations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 6610f1c2a1234567890abcd1
 *               bookId:
 *                 type: string
 *                 example: 6610f1c2a1234567890abcd2
 *               reservationDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-04-04T12:00:00Z
 *     responses:
 *       201:
 *         description: Reservation created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", reservationsController.createReservation);

/**
 * @swagger
 * /reservations/{id}:
 *   put:
 *     summary: Update a reservation
 *     description: Update an existing reservation by ID
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Reservation ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 6610f1c2a1234567890abcd1
 *               bookId:
 *                 type: string
 *                 example: 6610f1c2a1234567890abcd2
 *               reservationDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-04-05T15:30:00Z
 *     responses:
 *       200:
 *         description: Reservation updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Reservation not found
 */
router.put("/:id", reservationsController.updateReservation);

/**
 * @swagger
 * /reservations/{id}:
 *   delete:
 *     summary: Delete a reservation
 *     description: Remove a reservation from the system
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Reservation ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reservation deleted successfully
 *       404:
 *         description: Reservation not found
 */
router.delete("/:id", reservationsController.deleteReservation);

module.exports = router;