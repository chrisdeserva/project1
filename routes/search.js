var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    //do authentications
    console.log(req.method, req.url);
    //get query string
    console.log("searchItem", req.query.search);
    next();
});

router.param('search', function (req, res, next, search) {
    //do validate param
    console.log('CALLED ONLY ONCE', search);
    req.search = search+"validated";
    next();
});

router.get('/', function(req, res) {
    console.log("root");
});

router.get('/item/:search', function(req, res) {
    res.render('search', { 
        home: 'http://localhost:3000', 
        //searchItem: req.params.search,
        searchItem: req.search,
        result: 'Search result' 
    });
    //res.json({"first":"chris", "last": "deserva"});
});

module.exports = router;

