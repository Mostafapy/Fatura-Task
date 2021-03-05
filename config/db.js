const { Sequelize } = require('sequelize');

const init = () => {
    return new Sequelize({
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASENAME,
        logging: (query) => {
          console.log('query', { query });
        },
   });
}

const connectDB = async () => {
  try {
    const sequelize = init()
    await sequelize.authenticate();
    
     console.log('Connection has been established successfully.');
    } catch (err) {
     console.error('Unable to connect to the database:', err);
    }
}

module.exports = {
    init,
    connectDB
}