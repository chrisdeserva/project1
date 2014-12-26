var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { home: 'http://localhost:3000' });
});

router.param('id', function (req, res, next, id) {
    //do validate param
    console.log('CALLED ONLY ONCE', id);
    req.id = id+"validated";
    next();
});

router.get('/listing/:id', function(req, res) {
    res.render('listing', {
        home: 'http://localhost:3000',
        //searchItem: req.params.search,
        product_id: req.id
    });
    //res.json({"first":"first", "last": "second"});
});

module.exports = router;

