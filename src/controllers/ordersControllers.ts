import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

class OrdersController {
  static async getAll(_req: Request, res: Response) {
    try {
      const orders = await OrdersService.getAll();
      return res.status(200).json(orders); 
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  }
}

export default OrdersController;