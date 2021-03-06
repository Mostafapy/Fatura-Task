const addProviderController = require('./addProvider');
const getAllProvidersController = require('./getAllProviders');
const getProviderByIdController = require('./getProviderById');
const updateProviderController = require('../controllers/updateProvider');
const addProductProviderController = require('../controllers/addProductProvider');
module.exports =  {
    addProviderController,
    getAllProvidersController,
    getProviderByIdController,
    updateProviderController,
    addProductProviderController
}