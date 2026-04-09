const express = require('express');
const router = express.Router();
const passport = require('passport');

// login
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// callback
router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.send('Login successful');
  }
);

// logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.send('Logged out');
  });
});

module.exports = router;