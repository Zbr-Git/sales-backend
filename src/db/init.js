import SalesModel from '../model/sales/index.js';
import ProductsModel from '../model/products/products.js';
import SalePrdouctModel from '../model/sales/salesProducts.js';
import CategoryModel from '../model/products/category.js';
import sequelize from './config.js';
import UserModel from '../model/user/index.js';
import TokenModel from '../Model/Token/token.js';

const syncDB = async () => { 
  // await sequelize.sync({ alter: true, force: false });
  await CategoryModel.sync({ alter: true, force: false });
  await ProductsModel.sync({ alter: true, force: false });
  await SalesModel.sync({ alter: true, force: false });
  await SalePrdouctModel.sync({ alter: true, force: false });
  await UserModel.sync({ alter: true, force: false });
  await TokenModel.sync({ alter: true, force: false });

  // await SalesModel.sync({ alter: true, force: false });
  // await SalePrdouctModel.sync({ alter: true, force: false });
};

export default syncDB;
