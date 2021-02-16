//imports
var session = require("cookie-session");
const sessionKey = require('crypto');

const keyString = sessionKey.randomBytes(32).toString('hex')

function cookie(app){
    // Use session for identifying logged in user
    app.use(session({
        secret: keyString,
        resave: true,
        saveUninitialized: false,
        maxAge: 240 * 60 * 1000 //valid for 4 hours
    }));
}

module.exports = cookie