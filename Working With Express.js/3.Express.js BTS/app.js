let express = require('express') ;

const app = express() ;

app.listen(3000);

app.use(
    (req , res , next) => {
        console.log('Request recieved from url ' , req.url , 'with method' , req.method);
        next();
    }
);

app.use(
    (req , res , next) => {
        res.send('<h1>Fuck uuu</h1>');
        res.end();
    }
)