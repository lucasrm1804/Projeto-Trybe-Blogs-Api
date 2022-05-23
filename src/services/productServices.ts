import ProductModel from '../models/productModel';

class ProductServices {
  static async getAll() {
    const products = await ProductModel.getAll();

    return products;
  } 
}

export default ProductServices;