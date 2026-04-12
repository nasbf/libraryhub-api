const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  rentalDate: {
    type: Date,
    default: Date.now
  },
  returnDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['active', 'returned'],
    default: 'active'
  }
});

module.exports = mongoose.model('Rental', rentalSchema);