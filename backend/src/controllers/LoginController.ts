import { Request, Response } from 'express';
const loginService = require("../services/loginService.ts")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

class LoginController{

    static async login(req: Request, res: Response){
        const {email, password} = req.body;
        try {
            const token = await loginService.login(email, password); // gera um token de acesso.
            const {id} = jwt.decode(token)
            return res.status(200).json({"id": id ,"token": token}); // retorno do token
        } catch (error: any) {
            return res.status(404).json({"error": error.message});
        }
      }   
     
}

module.exports = LoginController;