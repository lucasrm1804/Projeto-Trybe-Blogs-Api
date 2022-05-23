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
}

export default ProductModel;