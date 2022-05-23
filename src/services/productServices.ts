import ProductModel from '../models/productModel';

class ProductServices {
  static async getAll() {
    const products = await ProductModel.getAll();

    return products;
  }

  static async create(name: string, amount:string) {    
    const product = await ProductModel.create(name, amount);    
    return product;
  }
}

export default ProductServices;