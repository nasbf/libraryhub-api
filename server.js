const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB conected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("LibraryHub API running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));