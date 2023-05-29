import { Request, Response } from 'express';
import User from '../models/User';
import { HashPass } from '@app/utils/secure';
const jwt = require('jsonwebtoken');

const bcrypt = require ("bcrypt")

class UserController {

    static async createUser (req: Request, res: Response) {
        try {
          const { username, email, password } = req.body;
          const hash = HashPass(password);

          const user = new User({ username, email, password: hash });
          await user.save();
          res.json(user);
        } catch (err: any) {
          console.log(err);
          res.status(500).send('Server error: ' + err.message);
        }
    }

    static async getUsers(req: Request, res: Response) {
        try {
          const users = await User.find();
          
          res.json(users);
        } catch (err) {
          console.log(err);
          res.status(500).send('Server error');
        }
      }

    static async findOneUser(req: Request, res: Response) {
        try {
          const user = await User.findById(req.params.id);
          if (!user) {
            return res.status(404).json({ msg: 'User not found' });
          }
          res.json(user);
        } catch (err) {
          console.log(err);
          res.status(500).send('Server error');
        }
      }

    static async deleteUser(req: Request, res: Response) {
        try {
          //Pegando id do usuário direto do token
          const authHeader = req.headers.authorization;
          if (!authHeader) {
            return res.status(401).json({ error: "Authorization header not found" });
          }
          const parts = authHeader.split(" ")
          const [scheme, token] = parts;
          const {id} = jwt.decode(token)

          //Comparando o Id recebido com o Id do token
          if(id !== req.params.id){
            return res.status(403).json({ error: "You can only delete your own user" });
          }

          const user = await User.findById(req.params.id);
          if (!user) {
            return res.status(404).json({ msg: 'User not found' });
          }
          await user.deleteOne();
          res.json({ msg: 'User removed' });
        } catch (err: any) {
          console.log(err);
          res.status(500).send('Server error: ' + err.message);
        }
      }

      static async updateUser(req: Request, res: Response) {
        try {
          //Pegando id do usuário direto do token
          const authHeader = req.headers.authorization;
          if (!authHeader) {
            return res.status(401).json({ error: "Authorization header not found" });
          }
          const parts = authHeader.split(" ")
          const [scheme, token] = parts;
          const {id} = jwt.decode(token)

          //Comparando o Id recebido com o Id do token
          if(id !== req.params.id){
            return res.status(403).json({ error: "You can only update your own user" });
          }

          //Pegando user e senha através do body
          const { username,password } = req.body; 
          const hash = await bcrypt.hash(password, 10);

          //Atualizando User
          const user = await User.findById(req.params.id);
          if (!user) {
            return res.status(404).json({ msg: 'User not found' });
          }
          user.username = username;
          user.password = hash;
          await user.save();
          res.json(user);
        } catch (err) {
          console.log(err);
          res.status(500).send('Server error');
        }
      }
}
module.exports = UserController;