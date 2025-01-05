//This line of code imports the Express.js framework and assigns it to the express constant,
//  making it available for use in the current JavaScript file.

const express = require('express');
const http = require ('http');

//This code snippet creates an instance of the Express.js framework and assigns it to the constant app.
//  This app object will be used to define the behavior of the web application.

const app = express() ;

// This line of code creates a new HTTP server using the http module and passes the Express.js app instance (app)
//  as a request listener. This allows the server to handle incoming requests using the routes and middleware defined
//  in the Express.js app. (1.Installing Express.js/app.js)
const server = http.createServer(app);

server.listen(3000);