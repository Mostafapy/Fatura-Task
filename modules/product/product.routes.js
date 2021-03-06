const express = require('express');
const pagination = require('../../common/middleware/pagination');
const Product = require('../../entities/product.entity');
const {
    addProductController,
    getAllProductsController,
    getProductByIdController,
    updateProductController,
    addorRemoveProductToCategory,
    assignProviderToProduct,
    getProductsOfCategory
} = require('./controllers');

const router = express.Router();

router.post(
  '/add',
  addProductController
);

router.post(
  '/assignProviderToProduct',
  assignProviderToProduct
);

router.get(
  '/all',
  pagination(Product),
  getAllProductsController
);

router.get(
  '/productOfCategory',
  pagination(Product),
  getProductsOfCategory
);


router.get(
  '/:id',
  getProductByIdController
);

router.put(
    '/:id',
    updateProductController
);

router.put(
  '/product/:id/category/:categoryId',
  addorRemoveProductToCategory
);

module.exports = router;