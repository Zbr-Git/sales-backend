import { Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHostname = process.env.DB_HOSTNAME;

// Create Sequelize instance
const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHostname,
  dialect: 'postgres',
});

 const connectionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}; 

export default sequelize;
export { connectionDB };
