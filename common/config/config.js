const development = {
    app: {
      port: parseInt(process.env.PORT, 0) || 3000
    },
    db: {
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASENAME,
    },
  };
  const test = {
    app: {
        port: parseInt(process.env.PORT, 0) || 3000
      },
      db: {
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASENAME,
      },
  };
  const production = {
    app: {
        port: parseInt(process.env.PORT, 0) || 3000
      },
      db: {
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASENAME,
      },
  };
  
  const config = {
    development,
    test,
    production
  };
  
  module.exports = config[process.env.NODE_ENV || 'development'];