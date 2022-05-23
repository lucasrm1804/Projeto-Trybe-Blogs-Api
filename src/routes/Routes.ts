import { Router } from 'express';
import ProductControllers from '../controllers/productControllers';
import CreatValidations from '../middleware/CreateValidations';

const routes: Router = Router();

routes.get('/products', ProductControllers.getAll);
routes.post(
  '/products',
  CreatValidations.validateName,
  CreatValidations.validateAmount,
  ProductControllers.create,
);

export default routes;