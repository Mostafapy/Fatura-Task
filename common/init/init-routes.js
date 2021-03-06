// Route files
const productRoutes = require('../../modules/product/product.routes');
const categoryRoutes = require('../../modules/category/category.routes')
const providerRoutes = require('../../modules/provider/provider.routes')

/**
 * @function
 * Registers all app routes
 *
 * @param {object} app - Express app.
 */
module.exports = (app) => {
  // Mount routers
  app.use(`api/v0/product`, productRoutes);
  app.use(`api/v0/category`, categoryRoutes);
  app.use(`api/v0/provider`, providerRoutes);
};