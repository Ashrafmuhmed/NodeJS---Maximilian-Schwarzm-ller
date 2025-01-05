const http = require('http') ;

const server = http.createServer(
    // ONCE THE SERVER RECIEVE A REQUEST THE SERVER PROCESS STOPS
    (req , res) => {
        console.log(req) ;
        process.exit();
    }
)

server.listen(3000) ;