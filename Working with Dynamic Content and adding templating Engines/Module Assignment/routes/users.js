const express = require('express');
const rootDir = require('../utils/path-root');
const path = require('path');
const adminData = require('./add-user');

const route = express.Router();

route.get(
    '/profiles' , 
    (req , res , next) => {
        res.render(
            path.join(rootDir , 'views' , 'profiles'), 
            {
                pageTitle : 'Profiles' , 
                users :adminData.registeredUsers , 
                path : '/users/profiles'
            }
        );
    }
)

module.exports = route ;