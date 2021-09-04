const express = require('express'),
  router = express.Router(),
  authController = require('../controllers/authController');

router.get('/login', authController.respondLogin);
router.get('/register', authController.respondRegister);

router.post('/login', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send('POST Successful!');
});
router.post('/register', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send('POST Successful!');
});

module.exports = router;
