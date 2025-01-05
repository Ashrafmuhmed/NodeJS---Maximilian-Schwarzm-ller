const express = require('express');


/*
This line of code imports the body-parser middleware library, which is used to parse the body of incoming HTTP requests in Express.js applications. */
const body_parser = require('body-parser');

const app = express({extended : false});
// In other words, it allows Express.js to extract data from HTTP requests that contain URL-encoded data, such as form submissions.


app.use(body_parser.urlencoded({extended : false}));

app.use(
    '/add-product',
    (req , res , n) => {
        console.log('New product is being added');;
        res.send('<form action = "/product" method = "POST"><input type="text" name="title"><button type= "submit">Add new product</button></form>');
        n();
    }
);

app.use(
    '/product',
    (req , res , n) => {
        console.log(req.body);
        res.redirect('/');
    }
)

app.listen(3000);