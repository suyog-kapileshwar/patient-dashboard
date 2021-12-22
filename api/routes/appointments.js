var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/name', function(req, res, next) {
  res.send("Jagdish Hiremath");
});

router.get('/date', function(req, res, next) {
    res.send("January 1, 2022");
});

router.get('/reason', function(req, res, next) {
    res.send(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius illum ducimus nobis? Maiores, nemo accusamus alias quo reprehenderit ipsa corrupti numquam nisi dolor quos eos, aspernatur ab aliquid vitae unde!");
});

module.exports = router;
