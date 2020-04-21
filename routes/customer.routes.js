var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Customer Home');
})

// About page route.
router.get('/detail', function (req, res) {
  res.send('Detail this wiki');
})

module.exports = router;