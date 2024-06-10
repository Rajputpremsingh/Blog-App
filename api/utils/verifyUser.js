import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js'
export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token
    console.log(req);
    if(!token){
        console.log("Till Here2");
        return next(errorHandler(401,"Unauthorized"))
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            console.log("Till Here3");
            return next(errorHandler(401,"Unauthorized"))
        }
        req.user = user
        next();

    });
}