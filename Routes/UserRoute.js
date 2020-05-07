const express = require('express')
const router = express.Router();


router.use((req,res,next)=>{
    next();
});



router.route('/')
.post((req,res)=>{
    res.send('POST REQUEST RECIEVED')
})

.get((req,res)=>{
    res.send('GET REQUEST RECEIVED')
})

module.exports = router;