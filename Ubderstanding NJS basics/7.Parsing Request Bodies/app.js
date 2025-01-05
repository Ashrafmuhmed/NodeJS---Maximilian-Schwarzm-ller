const http = require('http') ;
const fs = require('fs');
const server = http.createServer(
    (req , res) => {
        const reqUrl = req.url , reqMethod = req.method  ;
        if(reqUrl === '/' && reqMethod === 'GET')
        {
            res.setHeader('Content_Type' , 'text/html') ;
            res.write('<html>') ;
            res.write('<head><title>My Coirse server</title></head>');
            res.write('<body style = "background-color : red; color : white;"><form action = "/message" method= "POST"><input type = "text" name = "a7a"><button type = "submit">Submit</button></form></body>');
            res.write('</html>');
            return res.end();
        }
        if(reqUrl === '/message' && reqMethod === 'POST')
        {
            let data =[];
            req.on('data',(chunk) => {
                // data += chunk ;
                console.log(chunk);
                data.push(chunk);
            });
            req.on('end' , () => {
                console.log(data);
                const parsedBody = Buffer.concat(data);
                console.log(parsedBody); //<Buffer 61 37 61 3d 73 64 61 61 73 64 64 61>
                console.log(parsedBody.toString()); //a7a=sdadsda
                const message = parsedBody.toString().split('=')[1] ;
                fs.writeFileSync('responce.txt' , message);
            })
            res.statusCode = 301 ; 
            res.setHeader('Location' , '/');
            return res.end();
        }
    }
).listen(3000);