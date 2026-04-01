const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  bookId: {
    type: String,
    required: true
  },
  reservationDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: "pending"
  }
});

module.exports = mongoose.model("Reservation", reservationSchema);