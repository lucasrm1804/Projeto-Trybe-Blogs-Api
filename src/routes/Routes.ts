import { Router } from 'express';
import ProductControllers from '../controllers/productControllers';

const routes: Router = Router();

routes.get('/products', ProductControllers.getAll);

export default routes;