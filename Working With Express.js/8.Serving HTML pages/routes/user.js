const path = require('path');
const rootDir = require('../util/path');
const express = require('express') ;
const router = express.Router() ;

router.use(
    '/products' , 
    (req , res , next) => {
        res.sendFile(path.join(rootDir, 'views' , 'shop.html'));
    }
);

module.exports = router ;
