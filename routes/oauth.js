const express = require('express');
const router = express.Router();
const passport = require('passport');

// iniciar login con Google
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// callback
router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.json (req.user);
    //res.send('Login successful');
  }
);

module.exports = router;