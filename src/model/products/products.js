import { DataTypes } from 'sequelize';
import sequelize from '../../db/config.js';
import CategoryModel from './category.js';

const ProductsModel = sequelize.define('Products', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rate: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

export default ProductsModel;

ProductsModel.belongsToMany(CategoryModel, { through: 'categoryProducts' });
CategoryModel.belongsToMany(ProductsModel, { through: 'categoryProducts' });
