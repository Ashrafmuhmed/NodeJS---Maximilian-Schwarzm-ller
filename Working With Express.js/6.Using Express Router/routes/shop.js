const express = require('express'); 

const router = express.Router() ;

router.use(
    '/' ,
    (req , res , next) => {
        console.log('------- Unknown url :( -------');
        res.send('<h1>Hello User(</h1>');
    }
)


module.exports = router ;