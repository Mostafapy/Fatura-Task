const { Sequelize } = require('sequelize');
const config = require('../config/config');
const initializeEntities = require('../../entities');

const connectDB = async () => {
  try {
    const sequelize = new Sequelize({
      dialect: 'mysql',
      host: config.db.host,
      port: config.db.port,
      username: config.db.username,
      password: config.db.password,
      database: config.db.database,
      logging: (query) => {
        console.log('query', { query });
      },
    });
  
    await sequelize.authenticate();
  
    // Uncomment this following statements while initialize models
    // const entities = initializeEntities(sequelize);
    // await entities.sequelize.sync();
    console.log('Connection has been established successfully.');
    } catch (err) {
     console.error('Unable to connect to the database:', err);
    }
}

module.exports = connectDB;
