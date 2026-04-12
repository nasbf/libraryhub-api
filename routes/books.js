const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');
const isAuthenticated = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Library book management
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of books
 */
router.get('/', booksController.getAll);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get a single book
 *     description: Retrieve a book by its ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Book ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single book
 *       404:
 *         description: Book not found
 */
router.get('/:id', booksController.getById);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     description: Add a new book to the library
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *             properties:
 *               title:
 *                 type: string
 *                 example: The Great Gatsby
 *               author:
 *                 type: string
 *                 example: F. Scott Fitzgerald
 *               publishedYear:
 *                 type: number
 *                 example: 1925
 *               genre:
 *                 type: string
 *                 example: Fiction
 *               available:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', isAuthenticated, booksController.createBook);

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update a book
 *     description: Update an existing book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Book ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Title
 *               author:
 *                 type: string
 *                 example: Updated Author
 *               publishedYear:
 *                 type: number
 *                 example: 2000
 *               genre:
 *                 type: string
 *                 example: Drama
 *               available:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Book not found
 */
router.put('/:id', isAuthenticated, booksController.updateBook);

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book
 *     description: Remove a book from the system
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Book ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 */
router.delete('/:id', isAuthenticated, booksController.deleteBook);

module.exports = router;