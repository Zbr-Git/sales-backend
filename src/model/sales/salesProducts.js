import { DataTypes } from 'sequelize';
import sequelize from '../../db/config.js';
import SalesModel from './index.js';
import ProductsModel from '../products/products.js';

const SalesPrdouctModel = sequelize.define('SaleProduct', {
  productQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

SalesModel.hasMany(SalesPrdouctModel);
SalesPrdouctModel.belongsTo(SalesModel);

ProductsModel.hasMany(SalesPrdouctModel);
SalesPrdouctModel.belongsTo(ProductsModel);

export default SalesPrdouctModel;
