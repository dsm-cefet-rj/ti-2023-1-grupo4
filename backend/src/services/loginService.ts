
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
        
        const token = {
            UserInfo:{
                name:user.username,
                email:user.email,
                id: user.id,
                admin:user.admin,
                endereco:{
                    cep:user.cep || null,
                    logradouro:user.rua || null,
                    bairro:user.bairro || null,
                    numero:user.numero || null,
                    complemento:user.complemento || null,
                    cidade:user.cidade || null,
                    uf:user.estado || null
                }
            }
        }
        
        return token;
    }
}

export default LoginService;