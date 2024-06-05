import { Router } from 'express';
import CategoryController from '../../controller/category/index.js';
import { isAuthenticated } from '../../middleware/index.js';

const categoryRouter = Router();
categoryRouter.get('/categories', CategoryController.getAllCategories);
categoryRouter.get('/category/:id', CategoryController.getSingleCategory);
categoryRouter.post('/category', isAuthenticated,CategoryController.addCategory);
categoryRouter.put('/category/:id',isAuthenticated, CategoryController.UpdateCategory);
categoryRouter.delete('/category/:id',isAuthenticated, CategoryController.deleteCategory);

export default categoryRouter;
