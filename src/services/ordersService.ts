import OrdersModel from '../models/ordersModel';

class OrdersService {
  static async getAll() {
    const orders = await OrdersModel.getAll();
    return orders;
  }
}

export default OrdersService;