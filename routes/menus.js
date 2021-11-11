var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/take5', function(req, res, next) {
    res.render('take5', { title: '점심 식사 주문' });
});

/* GET home page. */
router.get('/speedbox', function(req, res, next) {
    res.render('speedbox', { title: '점심 식사 주문' });
});
module.exports = router;
