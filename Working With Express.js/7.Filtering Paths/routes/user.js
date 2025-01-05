const express = require('express') ;
const router = express.Router() ;

router.get(
    '/products' , 
    (req , res , next) => {
        res.send('<h1>WELCOME</h1>');
    }
);

module.exports = router ;
