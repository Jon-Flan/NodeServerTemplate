//initialize .env file
require('dotenv').config();//set to default .env but can also be {path: "path/filename"}

//module imports
const express = require("express");
const bodyParser = require("body-parser");
const xss = require("xss-clean");

//initialize app & use xss clean
var app = express();
app.use(xss());

//initialize the cookie settings
const cookie = require("./config/cookie")
cookie(app);

//set view engine & body parser from config
const viewEngine = require("./config/viewEngine");
viewEngine(app);

//initialze helmet security
const security = require("./config/security");
security(app);

//disable x-powered-by header
app.set('x-powered-by',false);

//initialize server
const server = require("./config/server");
server(app);

// Use body parser for parsing text, default parse limit is set to 100kb
app.use(bodyParser.urlencoded({extended: true}));

//initialize routes
app.use(require("./routes/routes"));