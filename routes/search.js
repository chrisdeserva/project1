var express = require('express');
var router = express.Router();

router.param('search', function (req, res, next, search) {
  console.log('CALLED ONLY ONCE');
  next();
});

router.get('/:search', function(req, res) {
    res.render('search', { 
        home: 'http://localhost:3000', 
        searchItem: req.params.search,
        result: 'Search result' 
    });
    //res.json({"first":"chris", "last": "deserva"});
});

module.exports = router;
