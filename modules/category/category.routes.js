const express = require('express');
const pagination = require('../../common/middleware/pagination');
const Category = require('../../entities/category.entity');

const {
    addCategoryController,
    getAllCategoriesController,
    getCategoryByIdController,
    updateCategoryController
} = require('./controllers');

const router = express.Router();

router.post(
  '/add',
  addCategoryController
);

router.get(
  '/all',
  pagination(Category),
  getAllCategoriesController
);

router.get(
  '/:id',
  getCategoryByIdController
);

router.put(
    '/:id',
    updateCategoryController
);

module.exports = router;