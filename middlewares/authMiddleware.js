const jwt = require('jsonwebtoken');

function authMiddleware(req,res,next){
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_PRIVATE_KEY, function(err, decoded){
        if(err){
            res.status(401).json({message: "Unauthorized"});
        }
        else {
            next();
        }
    })
}

module.exports = authMiddleware;