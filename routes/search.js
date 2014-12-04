var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    //do authentications
    console.log(req.method, req.url);
    //get query string
    req.search = req.query.q;
    next();
});

router.param('search', function (req, res, next, search) {
    //do validate param
    console.log('CALLED ONLY ONCE', search);
    req.search = search+"validated";
    next();
});

router.get('/', function(req, res) {
    res.render('search', { 
        home: 'http://localhost:3000', 
        //searchItem: req.params.search,
        searchItem: req.search,
        result: 'Search result' 
    });
});

router.get('/item/:search', function(req, res) {
    res.render('search', { 
        home: 'http://localhost:3000', 
        //searchItem: req.params.search,
        searchItem: req.search,
        result: 'Search result' 
    });
    //res.json({"first":"first", "last": "second"});
});

module.exports = router;

