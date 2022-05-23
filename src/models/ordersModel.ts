import connection from './connection';
import ProductsModel from './productModel';

type Order = {
  id: number;
  userId: number;
};

class ProductModel {
  static async getAll() {
    const [rows] = await connection.execute('SELECT * FROM Trybesmith.Orders');
    const orders = rows as Order[];
    const promisseProduct = orders.map((order) =>
      ProductsModel.getById(order.id));
    const products = await Promise.all(promisseProduct);
    const orderWithId = orders.map((order, index) => ({ ...order,
      productsIds: products[index].map((value) => value.id) }));
    return orderWithId;
  }
}

export default ProductModel;