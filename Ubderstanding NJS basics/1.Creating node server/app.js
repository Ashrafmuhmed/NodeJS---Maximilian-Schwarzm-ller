const http = require('http');

console.log(http) ;

const server = http.createServer( (req , res) =>   console.log('request received.......')) ;

server. listen(3000);