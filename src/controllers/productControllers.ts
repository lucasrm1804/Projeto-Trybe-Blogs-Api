import { Request, Response } from 'express';
import ProductServices from '../services/productServices';

class ProductControllers {
  static async getAll(_request: Request, response: Response) {
    try {
      const products = await ProductServices.getAll();

      return response.status(200).json(products);
    } catch (error) {
      response.status(404).json({ message: (error as Error).message });
    }
  }

  static async create(request: Request, response: Response) {
    try {
      const { name, amount } = request.body;
      
      const product = await ProductServices.create(name, amount);
            
      return response.status(201).json(product);
    } catch (error) {
      response.status(404).json({ message: (error as Error).message });
    }
  }
}

export default ProductControllers;