const connectDB  = require('./init-db');

/**
 * @function
 * Initializes app components
 *
 * @param {object} app - Express app.
 */
module.exports = () => {
  connectDB();
};