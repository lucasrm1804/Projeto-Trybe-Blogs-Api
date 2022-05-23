import connection from './connection';

type Products = {
  id: number;
  name: string;
  amount: string;
  orderId: number;
};

class ProductModel {
  static async getAll() {
    const [rows] = await connection.execute('SELECT * FROM Trybesmith.Products');
    
    return rows as Products[];
  }

  static async create(name: string, amount: string) {
    const [rows] = await connection.execute(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const id = (rows as { insertId: number }).insertId;
    
    return {
      name,
      amount,
      id,
    };
  }
}

export default ProductModel;