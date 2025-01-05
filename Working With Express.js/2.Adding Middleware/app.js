const express = require('express');

const http = require('http') ;

const app = express() ;
/**
 * 
 * The provided code is a snippet from an Express.js application, which is a web framework for Node.js. This code demonstrates the use of middleware functions in an Express.js application.

The app.use method is used to define middleware functions that will be executed for every incoming request to the server. Middleware functions have access to the request object (req), the response object (res), and the next function, which is used to pass control to the next middleware function in the stack.

In the first middleware function, a message is logged to the console that includes the URL and the HTTP method of the incoming request. After logging this information, the next function is called to pass control to the next middleware function.

The second middleware function logs a message to the console indicating that it is the second middleware. It then sends an HTML response with the content <h1>Hello fuckin users</h1>. Since this middleware sends a response, it does not call the next function, which means that no subsequent middleware functions will be executed for this request.

It is important to note that the use of inappropriate language in the response content is unprofessional and should be avoided in any production code.
 */
app.use( (req , res , next) => {
    console.log('First middleware' ,req.url , req.method);
    next(); 
} );

app.use( (req , res , next) => {
    console.log('Second middleware');
    res.send('<h1>Hello fuckin users</h1>')
} ); 
const server = http.createServer(app) ;

server.listen(3000);