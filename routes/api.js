var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    res.json(
        {
            'a':'b',
            'date':today,
            'c':'confirm changes on Friday'
        }
    );
});

router.get('/v1', function(req, res, next) {
    res.json(
        {
            'a':'b',
            'date':'version 01',
            'copyright': 'developed by Wilson Waldo :v'
        }
    );
});

module.exports = router;
