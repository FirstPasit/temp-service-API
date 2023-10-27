var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/conv/:temp/:unit', function(req, res, ) {
  let tem = Number(req.params.temp);
  let unit = req.params.unit;
  let temp_conv;
  let unit_conv;
  if(unit.trim() == 'cel'){
    temp_conv = ((tem/5)*9)+32;
    unit_conv = "Fahrenheit";
  }else{//fahrenheit
    temp_conv = ((tem -32)/9)*5;
    unit_conv = "Celcius";
  }
  let result = {"temp_conv":temp_conv,"unit_conv":unit_conv};
  res.send(result);
});

module.exports = router;
