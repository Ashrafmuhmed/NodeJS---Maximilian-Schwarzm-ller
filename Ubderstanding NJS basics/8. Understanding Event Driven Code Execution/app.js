const http = require('http');
const fs = require('fs');

const server =  http.createServer(
    (req , res) => 
    {
        const url = req.url ;
        const method = req.method ;

        req.on('data' , (chunk) => {
            console.log(chunk) ;
        });
        req.on('end' , () =>{
            fs.writeFileSync('text.txt' , 'res555') ; // executed second
        });
        return fs.writeFileSync('text.txt' , 'res1'); //executed first
    }
).listen(3000);