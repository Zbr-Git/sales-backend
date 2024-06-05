import { DataTypes } from 'sequelize';
import sequelize from '../../db/config.js';

const SalesModel = sequelize.define('Sales', {
  totalAmount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});


export default SalesModel;
