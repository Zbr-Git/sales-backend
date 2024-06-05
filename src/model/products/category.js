import { DataTypes } from 'sequelize';
import sequelize from '../../db/config.js';
const CategoryModel  = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default CategoryModel;
