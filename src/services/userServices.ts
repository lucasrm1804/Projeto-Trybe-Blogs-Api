import Jwt from 'jsonwebtoken';

import UserModel from '../models/userModel';

class UserServices {
  static async create(username: string, classe: string, level: number, password:string) {    
    const user = await UserModel.create(username, classe, level, password);  
     
    return Jwt.sign({ user }, 'tobias');
  }
}

export default UserServices;