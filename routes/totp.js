var express = require('express');
var router = express.Router();
var totp = require('totp-generator');
 

/* GET home page. */
router.get('/:secret', function(req, res, next) {
    var gentoken = totp(req.params.secret);
    res.send({ token: gentoken });
});

module.exports = router;