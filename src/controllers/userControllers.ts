import { Request, Response } from 'express';
import UserServices from '../services/userServices';

class UserControllers {
  static async create(request: Request, response: Response) {
    try {
      const { username, classe, level, password } = request.body;
      
      const token = await UserServices.create(username, classe, level, password);
      return response.status(201).json({ token });
    } catch (error) {
      response.status(404).json({ message: (error as Error).message });
    }
  }
}

export default UserControllers;