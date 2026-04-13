const Rental = require('../models/rentals');

// GET all
const getAll = async (req, res) => {
  const data = await Rental.find();
  res.status(200).json(data);
};

// GET by id
const getById = async (req, res) => {
  const data = await Rental.findById(req.params.id);
  res.status(200).json(data);
};

// POST
const createRental = async (req, res) => {
  const rental = new Rental(req.body);
  const data = await rental.save();
  res.status(201).json({
    message: 'Rental created succesfully',
    data: data});
};

// PUT
const updateRental = async (req, res) => {
  const data = await Rental.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({
    message: 'Rental updated succesfully',
    data: data});
};

// DELETE
const deleteRental = async (req, res) => {
  await Rental.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: 'Rental Deleted' });
};

module.exports = {
  getAll,
  getById,
  createRental,
  updateRental,
  deleteRental
};