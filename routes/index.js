const express = require('express'),
  router = express.Router(),
  authPages = require('./auth');

router.get('/', function () {});
router.use('/', authPages);

module.exports = router;
