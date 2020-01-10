
const jwt = require('jsonwebtoken');

let verificarToken = (req,res,next) => {
    
    let token = req.get('token');

    jwt.verify(token,process.env.SEED ,(err,decoded)=>{
        if(err){
            return res.status(401).json({
                ok:false,
                err 
            })
        }

        
        next();

    })

}


module.exports = {
    verificarToken
};