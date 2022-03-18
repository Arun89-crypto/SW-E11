import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';
const jwt_secret = process.env.SECRET

const fetchUser = (req:Request,res:Response,next:NextFunction) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
     try {
        const data = jwt.verify(token, jwt_secret)
        res.locals.user = data.user
        next()
    } catch (error) {
        res.sendStatus(401);
    }
}

export default fetchUser;

// Include in headers :
/*
auth-token : token

Add always before any user authorized functions
*/

