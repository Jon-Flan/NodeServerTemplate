//imports
var rateLimit = require("express-rate-limit");

    // Set Rate Limiting for initial loading of pages & routes
     exports.refreshLimit=
        rateLimit({
        max: 100,// max requests
        windowMs: 60 * 60 * 1000, // per 1 Hour
        handler: function (req, res) {
                res.send("Oops too many requests, retry in 1hour");
                },
        });
    
    // Set Rate Limiting for initial loading of pages & routes
  exports.loginLimit=
        rateLimit({
        max: 3,// max requests
        windowMs: 15 * 60 * 1000, // per 15min 
        skipSuccessfulRequests: false,
        handler: function (req, res) {
            res.send("Too many login attempts made, retry in 15mins");
            },
        }); 