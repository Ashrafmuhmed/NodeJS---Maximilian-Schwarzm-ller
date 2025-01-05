let numberOfUsers = 0 ;
const routesHandler = (req , res) => {
    const url = req.url , method = req.method ;
    if(url === '/' && method === 'GET')
    {
        res.setHeader('Contenet-type' , 'text/html');
        res.write('<html>');
        res.write('<head><title>My Fuckin Server</title></head>');
        res.write('<body>');
        res.write('<h1>Hello To My Fuckin Server</h1>');
        res.write('<form action = "/create-user" method = "POST"><input type = "text" name = "user-name" placeholder = "Ur Fuckin User-name"><button type = "submit">Submit</button></input></form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        numberOfUsers++;
    }
    else if(url === '/create-user' && method === 'POST')
    {
        const body = [] ;
        req.on(
            'data' , 
            (chunks) => {
                body.push(chunks) ;
            }
        );
        req.on(
            'end' ,
            () => {
                const user = Buffer.concat(body).toString().split('=')[1] ;
                console.log(`The Fucken User Name is ${user} ------- number ${numberOfUsers}`);
                res.statusCode = 303 ;
                res.setHeader('Location' , '/users');
                res.end();
            }
        );
    }
    else if(url === '/users' && method === 'GET')
    {
        res.setHeader('Content-Type' , 'text/html');
        res.write('<html>');            
        res.write('<head><title>My Fuckin Server</title></head>');
        res.write('<body>');
        res.write('<ul>');
        for(let i = 0 ; i < numberOfUsers ; ++i)
        {
            res.write(`<li>User ${i}</li>`);
        }
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }else
    {
        res.setHeader('Content-Type' , 'text/html');
        res.write('<html>');            
        res.write('<head><title>My Fuckin Server</title></head>');
        res.write('<body>');
        res.write('<h1>404 555</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }

}

module.exports = {
    routes : routesHandler
};