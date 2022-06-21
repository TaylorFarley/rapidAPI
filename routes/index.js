var express = require('express');
var router = express.Router();
const fs = require('fs');

let rawdata = fs.readFileSync('./data.JSON');



router.get('/', function(req, res, next) {

  let student = JSON.parse(rawdata);
  console.log(student)
  res.send(student)
});

module.exports = router;
