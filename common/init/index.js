const connectDB  = require('./init-db');
const initRoutes = require('./init-routes');

/**
 * @function
 * Initializes app components
 *
 * @param {object} app - Express app.
 */
module.exports = (app) => {
  connectDB();
  initRoutes(app);
};