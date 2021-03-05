const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASWORD,
        database: process.env.DATABASE_DATABASENAME,
        logging: (query) => {
          console.log('query', { query });
        },
        dialectOptions: {
          decimalNumbers: true,
          options: {
            enableArithAbort: true,
            encrypt: true,
          },
        },
});

const connectDB = async (sequelize) => {
  try {
    await sequelize.authenticate();
    
     console.log('Connection has been established successfully.');
    } catch (err) {
     console.error('Unable to connect to the database:', err);
    }
}

module.exports = {
    sequelize,
    connectDB
}