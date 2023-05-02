import { Router, Request, Response } from 'express';
import User from '../models/User';

const user = Router();

user.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

user.post('/users', async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      const user = new User({ username, email, password });
      await user.save();
      res.json(user);
    } catch (err: any) {
      console.log(err);
      res.status(500).send('Server error: ' + err.message);
    }
  });

  user.get('/users', async (req: Request, res: Response) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).send('Server error');
    }
  });

  user.get('/users/:id', async (req: Request, res: Response) => {
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
  });

  user.put('/users/:id', async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      user.username = username;
      user.email = email;
      user.password = password;
      await user.save();
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).send('Server error');
    }
  });

  user.delete('/users/:id', async (req: Request, res: Response) => {
    try {
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
  });
  
export default user;
