//imports
const http = require("http");
var tls = require("tls");

//initialize .env file
require('dotenv').config();//set to default .env but can also be {path: "path/filename"}

// Create instance of TLSSocket to be able to retrieve the protocol being used
var tlsSocket = new tls.TLSSocket();

function server(app){
    //Port settings for http
    let port = process.env.PORT;
    let host = process.env.HOST;

    //create server
    let server = http.createServer(app);

    server.listen(port, host,()=>{
        if(process.env.NODE_ENV === 'development') {
            console.log(`Server Running in production on ${host}:${port}, TLS version is: ` + tlsSocket.getProtocol());
        }else{
            console.log(`Server Running in dev mode on ${host}:${port}, TLS version is: ` + tlsSocket.getProtocol());
        }
    });
}

module.exports = server