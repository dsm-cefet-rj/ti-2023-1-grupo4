import jwt from 'jsonwebtoken';
import { Response, NextFunction, Request } from 'express';
import user from '../models/User';


export function Authenticate(req: Request, res:Response, next: NextFunction){
    let token = req.cookies['fastbyte_token'];

    if (!token){
        return res.status(401).json({"error": "Token não fornecido"});
    }

    const payload = jwt.verify(token, process.env.JWT_KEY || '');

    if (!payload){
        return res.status(401).json({"error": "Token corrompido"});
    }

    req.cookies['fastbyte_token'] = payload;

    console.log("token:", payload);
    next();

}

export function Authorizate () {
    return async (req: Request, res:Response, next: NextFunction) => {
        const token = req.cookies['fastbyte_token'];
        const userObject = await user.findById(token?.UserInfo['id']);
        if (!userObject?.admin){
            return res.status(403).json({status:false, message:"Forbidden"});
        }
        next();
    }
}