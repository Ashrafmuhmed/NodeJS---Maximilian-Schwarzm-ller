const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router() ;

router.get(
    '/profile' ,
    (req , res , next) => {
        res.sendFile(path.join(rootDir , 'views' , 'profile.html'));
    }
)

router.get(
    '/feed',
    (req , res , next) => {
        res.sendFile(path.join(rootDir , 'views' , 'feedPage.html'));
    }
);



module.exports = router ;