//imports
var express = require('express');
var router = express.Router();

//import and initialize rate limiter 
const limiter = require('../config/rateLimit');

//controllers
var main = require('../controllers/main');

//index page
router.get('/',limiter.refreshLimit,main.indexPage);

//test page 2
router.get('/test', limiter.refreshLimit,main.testPage2);

module.exports = router