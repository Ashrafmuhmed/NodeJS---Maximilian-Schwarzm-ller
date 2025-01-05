const http = require('http');
const fs = require('fs');
const routes = require('./routes');
const server = http.createServer(
    routes.routes
).listen(3000);
