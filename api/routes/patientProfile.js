var express = require('express');
var router = express.Router();

// Structure to crate data in the backend. This is passed to front end.

router.get('/name', (req, res) => {
  const obj = 'John S Datsun';
  res.send(obj);
});

router.get('/email', (req, res) => {
  const obj = 'datsunjohn@email.com';
  res.send(obj);
});

router.get('/contact', (req, res) => {
  const obj = "+91 9876 54 3210";
  res.send(obj);
});

router.get('/emergency-contact', (req, res) => {
  const obj = "+91 1234 56 7890";
  res.send(obj);
});

module.exports = router;