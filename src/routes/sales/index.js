import { Router } from 'express';
import SalesController from '../../controller/sales/index.js';
import { isAuthenticated } from '../../middleware/index.js';

const salesRouter = Router();
salesRouter.get('/sales', SalesController.getAllSales);

salesRouter.get('/sales/:id', SalesController.getSingleSale);
// salesRouter.get('/sales/:id', SalesController.getProductSale); // with query
salesRouter.post('/sales', isAuthenticated, SalesController.createSale);

salesRouter.put('/sales/:id', isAuthenticated, SalesController.updateSale);

salesRouter.delete('/sales/:id', isAuthenticated, SalesController.deleteSale);
salesRouter.delete(
  '/sales/:s_id/products/:p_id',
  isAuthenticated,
  SalesController.deleteProductFromSalesProduct
);

export default salesRouter;
