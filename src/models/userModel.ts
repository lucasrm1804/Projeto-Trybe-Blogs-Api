import connection from './connection';

class UserModel {
  static async create(username: string, classe: string, level: number, password: string) {
    const [rows] = await connection.execute(
      'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const id = (rows as { insertId: number }).insertId;
    return id;
  }   
}

export default UserModel;
