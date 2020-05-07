const express = require('express')
const router = express.Router();
const {grantAccessToken,authenticateToken}  =require('../Auth/Auth')

router.use((req,res,next)=>{
    next();
});


router.post('/login',(req,res)=>{
    const {email,password} = req.body;
    if(email == "admin@gmail.com" && password == "123"){
        res.send(grantAccessToken(email,["Admin","User"]))
    }else{
        res.send("Invalid Credentials")
    }
});
router.route('/')
.post((req,res)=>{
    res.send('POST REQUEST RECIEVED')
})

.get(authenticateToken,(req,res)=>{
    res.send(req.user)
})

module.exports = router;