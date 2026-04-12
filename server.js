const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const session = require('express-session');
const passport = require('passport');

require('./config/passport');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'secretkey',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✅ OAuth routes (teammate)
app.use('/auth', require('./routes/oauth'));

// ✅ API routes
app.use('/', require('./routes'));

app.get('/', (req, res) => {
  res.send('This is our Libraryhub API (Bridger/Alexandra)');
});

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB with Mongoose');

    if (process.env.NODE_ENV !== 'test') {
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    }
  })
  .catch((error) => {
    console.error('Connection error:', error);
  });

module.exports = app;