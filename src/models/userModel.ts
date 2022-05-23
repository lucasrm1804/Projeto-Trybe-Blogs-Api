import connection from './connection';

class UserModel {
  static async create(username: string, classe: string, level: number, password:string) {
    const [rows] = await connection.execute(
      'INSERT INTO Trybesmith.User (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id: (rows as { insertId: number }).insertId };
  }
}

export default UserModel;