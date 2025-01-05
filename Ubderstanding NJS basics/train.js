const http = require('http');
const fs = require('fs');
const server = http.createServer(
    (req , res) => {
        const method = req.method , url = req.url ; 
        if(url === '/fuck' && method === 'GET')
        {
            res.setHeader('Content_Type' , 'text\html');
            res.write('<html>') ;
            res.write('<head><title>My training server</title></head>');
            res.write('<body>');
            res.write('<form action = "/" method= "POST"><input type = "text" name = "message"><button type = "submit">Submit</button></form>');
            res.write('</body></html>');
            res.end();
        }
        if(url === '/' && method === 'POST')
        {
            res.setHeader('Content-Type' , 'text/html');
            res.write('<html>');
            res.write('<head><title>My training server</title></head>');
            res.write('<body><h1>Hello from my first node.js server!!</h1></body>');
            res.write('</html>');
            res.end();
            fs.writeFileSync('message.txt' , 'DUMMY');
        }
    }
).listen(3000);