var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bmiCal/:weight/:height', function(req, res) {
   let height = Number(req.params.height);
   let weight = Number(req.params.weight)/100;
   var bmi = weight / Math.pow(height,2);
   let desc = "";
   if(bmi < 18.5){
        desc = "Underweight";
   }else if(bmi >= 18.5 && bmi < 20){
        desc = "Normal weight";
   }else if(bmi >= 25 && bmi < 30){
        desc = "Overweight";
   }else{
    desc = "Obesity";
   }
   res.send({"bmi -> ":bmi,"desc ": desc});

  });

module.exports = router;