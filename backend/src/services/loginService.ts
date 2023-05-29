
import { ComparePass } from '@app/utils/secure';
import User from '../models/User';
import jwt from 'jsonwebtoken';

class LoginService {
   static async login(email: string, password: string){
        
        const user = await User.findOne({email}).exec();
        if (!user){
            throw new Error("Usuário inexistente.");
        }

        if(!ComparePass(password, user.password)){
            throw new Error("Erro: um dos dados inseridos está incorreto.");
        }
        
        const token = jwt.sign({
            UserInfo:{
                name:user.username,
                email:user.email,
                id: user.id
            }
        },
        process.env.JWT_KEY || '',
        {
            expiresIn:'48h'
        });
        
        return token;
    }
}

export default LoginService;