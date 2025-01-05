let http = require('http');
const routes = require('./routes');
console.log(routes.someText);

const server = http.createServer(
    // module.exports = requestHandler ;
    // routes
    // console.log(routes.handler)
    routes.handler
).listen(3000);

console.log('server');