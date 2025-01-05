const http = require('http') ;

http.createServer(
    (req , res) => {
        const url = req.url ; 
        const method = req.method ;
        if(url === '/'){

            res.setHeader('Content-type' , 'text/html');
            res.write('<html>');
            res.write('<head><title>My first server</title></head>');
            res.write('<body><form action="/message" method="GET"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
            res.write('</html>');
            res.end();
        }
        else{
            res.setHeader('Content-type' , 'text/html');
        res.write('<html>');
        res.write('<head><title>My first server</title></head>');
        res.write('<body><h1>Hello from my first node.js server!!</h1></body>');
        res.write('</html>');
        res.end();
        console.log(req.message);

        }
        
    }
).listen(3000);

/*
    action -> the url this request will be generated auto should be sent to.
    method -> http method that will be used (
                                            GET => When entering a url
                                            POST => When the server pushes a specfic url to the client
                                            )
*/