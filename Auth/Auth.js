const jwt = require('jsonwebtoken');
const JWT_TOKEN_SECRET =  require('../Others/Constants')


// return variable which has username,role and secret token that identifies the user
const grantAccessToken = (email,roles)=>{
    const accessToken = jwt.sign({username:email,role:roles},JWT_TOKEN_SECRET);
    return accessToken;
}

//req have data for authentication
//res send response after authentication
//next move to next step
const authenticateToken = (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, JWT_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

module.exports = {authenticateToken,grantAccessToken};

