import { Router } from 'express';
import ProductsController from '../../controller/products/index.js';
import { isAuthenticated } from '../../middleware/index.js';

const prodcutsRouter = Router();
prodcutsRouter.get('/products', ProductsController.getAllProducts);
prodcutsRouter.get('/products/:id', ProductsController.getSingleProduct);
prodcutsRouter.post(
  '/products',
  isAuthenticated,
  ProductsController.addProduct
);
prodcutsRouter.put(
  '/products/:id',
  isAuthenticated,
  ProductsController.UpdateProduct
); 
prodcutsRouter.delete(
  '/products/:id',
  isAuthenticated,
  ProductsController.deleteProduct
);

export default prodcutsRouter;
