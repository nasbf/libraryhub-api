const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
<<<<<<< Updated upstream
=======
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const session = require('express-session');
const passport = require('passport');
require('./config/passport');

>>>>>>> Stashed changes
const app = express();
const port = process.env.PORT || 8080;


app.use(express.json());
<<<<<<< Updated upstream
=======


app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', require('./routes/oauth'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

>>>>>>> Stashed changes
app.use ('/', require('./routes'));
app.get('/', (req, res) => {
  res.send('This is our Libraryhub API (Bridger/Alexandra)')
});


mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB with Mongoose');

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  })
  .catch((error) => {
    console.error('Connection error:', error);
  });