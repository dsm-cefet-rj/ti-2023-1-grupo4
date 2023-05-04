const bcrypt = require ('bcrypt')
import User from '../models/User';
const jwt = require('jsonwebtoken');

class LoginService {
   static async login(email: String, password: String){
        
        const user = await User.findOne({email}).exec();
        if (!user){
            throw new Error("Usuário inexistente.");
        }

        if(!await bcrypt.compare(password, user.password)){
            throw new Error("Erro: um dos dados inseridos está incorreto.");
        }
        
        const token = jwt.sign({
          name:user.username,
          email:user.email,
          id: user.id
        }, "c8fc19bb-6b35-43a9-8dba-0e11cfce2729" , {expiresIn: "48h"});
        
        
        return token;
    }
}

module.exports = LoginService;