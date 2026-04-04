const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Library user management
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all library users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', usersController.getAll);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a single user
 *     description: Retrieve a user by their ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single user
 *       404:
 *         description: User not found
 */
router.get('/:id', usersController.getById);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Add a new user to the library system
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: johndoe@email.com
 *               googleId:
 *                 type: string
 *                 example: 1234567890abcdef
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-04-04T12:00:00Z
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', usersController.createUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user
 *     description: Update an existing user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Name
 *               email:
 *                 type: string
 *                 example: updated@email.com
 *               googleId:
 *                 type: string
 *                 example: updatedGoogleId123
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: User not found
 */
router.put('/:id', usersController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     description: Remove a user from the system
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete('/:id', usersController.deleteUser);

module.exports = router;