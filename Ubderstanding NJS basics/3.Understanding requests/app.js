const http = require('http') ;

const server = http.createServer(
    (req , res) => {
        console.log(req.url , req.method , req.headers) ;
    }
)

/*
    - search field => http://localhost:3000/pin/fuckk
    so req.url is /pin/fuckk

    - search field => localhost:3000
    so req.url is /


    - req.method is GET

    - req.headers is {
  host: 'localhost:3000',
  connection: 'keep-alive',
  'sec-ch-ua': '"Microsoft Edge";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*//*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'sec-fetch-site': 'none',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-user': '?1',
  'sec-fetch-dest': 'document',
  'accept-encoding': 'gzip, deflate, br, zstd',
  'accept-language': 'en-US,en;q=0.9'
}
*/

server.listen(3000) ;