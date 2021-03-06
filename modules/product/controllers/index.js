const addProductController = require('./addProduct');
const getAllProductsController = require('./getAllProducts');
const getProductByIdController = require('./getProductById');
const updateProductController = require('../controllers/updateProduct');
const addorRemoveProductToCategory = require('../controllers/addorRemoveProductToCategory');
const assignProviderToProduct = require('../controllers/assignProviderToProduct');
const getProductsOfCategory = require('../controllers/getProductsOfCategory');

module.exports =  {
    addProductController,
    getAllProductsController,
    getProductByIdController,
    updateProductController,
    addorRemoveProductToCategory,
    assignProviderToProduct,
    getProductsOfCategory
}