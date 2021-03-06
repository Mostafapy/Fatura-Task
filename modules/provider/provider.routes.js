const express = require('express');
const pagination = require('../../common/middleware/pagination');
const Provider = require('../../entities/provider.entity');

const {
   addProviderController,
   getProviderByIdController,
   getAllProvidersController,
   updateProviderController,
   addProductProviderController
} = require('./controllers');

const router = express.Router();

router.post(
  '/add',
  addProviderController
);

router.post(
  '/:providerId/product/:productId',
  addProductProviderController
);

router.get(
  '/all',
  pagination(Provider),
  getAllProvidersController
);

router.get(
  '/:id',
  getProviderByIdController
);

router.put(
    '/:id',
    updateProviderController
);

module.exports = router;