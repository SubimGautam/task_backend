import { Request, Response } from 'express';
import { UserService } from '../service layer/user_service';

const userService = new UserService();

export class UserController {
  static getAllUsers(req: Request, res: Response) {
    return res.json(userService.getAllUsers());
  }

  static getUserById(req: Request, res: Response) {
    const user = userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    return res.json(user);
  }

  static createUser(req: Request, res: Response) {
    const { id, username, email, name, age } = req.body;
    if (!id || !username || !email || !name) {
      return res.status(400).json({ error: 'Id, Username, email, and name are required' });
    }
    const newUser = userService.createUser({ id, username, email, name, age });
    return res.status(201).json(newUser);
  }

  static updateUser(req: Request, res: Response) {
    const updatedUser = userService.updateUser(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });
    return res.json(updatedUser);
  }

  static deleteUser(req: Request, res: Response) {
    const deletedUser = userService.deleteUser(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: 'User not found' });
    return res.status(204).send();
  }
}