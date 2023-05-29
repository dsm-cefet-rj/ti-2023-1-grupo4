import { Request, Response } from 'express';
import loginService from "../services/loginService";

class LoginController{

    static async login(req: Request, res: Response){
        const {email, password} = req.body;
        try {
            const token = await loginService.login(email, password); // gera um token de acesso.
            res.cookie('fastbyte_token', token, {
                httpOnly:true,
                path:'/',
                maxAge: 2 * 24 * 60 * 60 * 1000
            });
            return res.status(200).json({status:true}); // retorno do token
        } catch (error: any) {
            return res.status(500).json({status:false, "message": error.message});
        }
      }   
     
}

module.exports = LoginController;