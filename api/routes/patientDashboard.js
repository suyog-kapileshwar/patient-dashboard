var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/age', (req, res) => {
  const obj = '23';
  res.send(obj);
});

router.get('/blood-group', (req, res) => {
  const obj = 'O +ve';
  res.send(obj);
});

router.get('/medical-history', (req, res) => {
  const obj = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, saepe quia id, unde mollitia, pariatur repellat autem expedita quod dolor ut obcaecati illo et quae atque? Velit quia optio minus?";
  res.send(obj);
});

module.exports = router;
