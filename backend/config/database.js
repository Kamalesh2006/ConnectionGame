import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'connectiongame_db', // database name
  'root',              // username
  '',          // password
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

export { sequelize };
