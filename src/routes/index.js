import authRouter from './auth/index.js';
import categoryRouter from './category/index.js';
import prodcutsRouter from './products/index.js';
import salesRouter from './sales/index.js';

const allRoutes = [salesRouter, prodcutsRouter, categoryRouter, authRouter];

export default allRoutes;
