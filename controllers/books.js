const Book = require('../models/book');

const getAll = async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.status(200).json(book);
};

const createBook = async (req, res) => {
  const book = new Book(req.body);
  const saved = await book.save();
  res.status(201).json(saved);
};

const updateBook = async (req, res) => {
  const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updated);
};

const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: 'Book deleted' });
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook
};