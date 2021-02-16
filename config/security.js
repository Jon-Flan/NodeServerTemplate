//imports
const helmet = require("helmet");

function security(app){
    //helmet security settings import from env
    app.use(helmet());
    app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0'}));
    app.use(helmet.frameguard({ action: 'deny'}));
    app.use(helmet.xssFilter());
    app.use(helmet.noSniff());
    app.use(helmet.ieNoOpen());
    app.use(helmet.dnsPrefetchControl());

    //setting content security policies
    app.use(helmet.contentSecurityPolicy({directives:{
        defaultSrc:["'self'"], 
    scriptSrc:["'self'","'unsafe-inline'"],
    styleSrc:["'self'", "'unsafe-inline'"],
    imgSrc:["'self'"],      
    }}));
}


module.exports = security;