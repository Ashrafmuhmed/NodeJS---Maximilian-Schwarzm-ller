const http = require('http');
const fs = require('fs') ;

const server = http.createServer(
    (req, res) => {
        const url = req.url;
        const method = req.method;
        if (url === '/' && method === 'GET') {
            res.setHeader('Content-type', 'text/html');
            res.write('<html>');
            res.write('<head><title>My first server</title></head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
            res.write('</html>');
            return res.end();
        }
        if (url === '/message' && method === 'POST') {
            fs.writeFileSync('message.txt' , 'DUMMY');
            res.statusCode = 303 ;
            res.setHeader('Location' , '/');
            return res.end();
        }
        // res.setHeader('Content-type', 'text/html');
        // res.write('<html>');
        // res.write('<head><title>My first server</title></head>');
        // res.write('<body><h1>Hello from my first node.js server!!</h1></body>');
        // res.write('</html>');
        // res.end();
        // console.log(req.method);
    }
).listen(3000) ;