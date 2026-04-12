const router = require('express').Router();
const passport = require('passport');

// Start Google login
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback
router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.json({
      message: 'Login successful',
      user: req.user
    });
  }
);

// Logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

module.exports = router;