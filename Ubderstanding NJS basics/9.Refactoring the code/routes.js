const fs = require('fs') ;

const requestHandler = (req , res) => {
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
        const body = [];
        req.on(
            'data',
            (chunk) => {
                body.push(chunk);
            }
        );
        req.on(
            'end',
            () => {
                const parsedBody = Buffer.concat(body);
                const message = parsedBody.toString();
                fs.writeFile('message.txt', message.split('=')[0], err => {
                    res.statusCode = 303;
                    res.setHeader('Location', '/');
                    return res.end();
                });
            }
        )
    }
    // res.setHeader('Content-type', 'text/html');
    //     res.write('<html>');
    //     res.write('<head><title>My first server</title></head>');
    //     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
    //     res.write('</html>');
    //     return res.end();

}

// module.exports = requestHandler ;

// module.exports = {
//     handler : requestHandler ,
//     someText : 'some text'
// } ;



exports.handler = requestHandler ;
exports.someText = 'requestHandler' ;