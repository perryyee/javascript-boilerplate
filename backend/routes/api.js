var express = require('express');
var request = require('request');
var router = express.Router();

/* GET external API */
router.get('/', function(req, res, next) {
  request('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var json = JSON.parse(body);
      res.json(json[0]);
    } else {
      res.send('error');
    }
  })
});


module.exports = router;
