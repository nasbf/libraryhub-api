const express = require('express');
const router = express.Router();
const controller = require('../controllers/rentals');


/**
 * @swagger
 * /rentals:
 *   get:
 *     summary: Get all rentals
 *     tags: [Rentals]
 *     responses:
 *       200:
 *         description: List of rentals
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /rentals/{id}:
 *   get:
 *     summary: Get a rental by ID
 *     tags: [Rentals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single rental
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /rentals:
 *   post:
 *     summary: Create a rental
 *     tags: [Rentals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               bookId:
 *                 type: string
 *               returnDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Rental created
 */
router.post('/', controller.createRental);

/**
 * @swagger
 * /rentals:
 *   post:
 *     summary: Create a rental
 *     tags: [Rentals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               bookId:
 *                 type: string
 *               returnDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Rental created
 */
router.put('/:id', controller.updateRental);

/**
 * @swagger
 * /rentals/{id}:
 *   delete:
 *     summary: Delete a rental
 *     tags: [Rentals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rental deleted
 */
router.delete('/:id', controller.deleteRental);

module.exports = router;