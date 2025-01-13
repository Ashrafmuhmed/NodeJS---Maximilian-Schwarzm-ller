const express = require('express');
const path = require('path');
const rootDir = require('../utils/path-root');
const route = express.Router();

const registeredUsers = [] ;

route.get(
    '/add-user' , 
    (req , res , next) => {
        res.render(path.join(rootDir , 'views' , 'add-user'),
    {
        pageTitle : 'Register',
        path : '/register/add-user'
    });
    }
);

route.post(
    '/add-user' , 
    (req , res , next) => {
        console.log(req.body.username);
        registeredUsers.push(
            {
                username : req.body.username
            }
        );
        res.redirect('/users/profiles');
    }
)

module.exports = {
    route : route , 
    registeredUsers : registeredUsers
} ;