const http = require('http') ;

const server = http.createServer(
    (req , res) => {
        console.log(req.url , req.method) ;
        res.setHeader('Content-type' , 'text/html');
        res.write('<html>');
        res.write('<head><title>My first server</title></head>');
        res.write('<body><h1>Hello from my first node.js server!!</h1></body>');
        res.write('</html>');
        res.end();
    }
).listen(3000) ;
