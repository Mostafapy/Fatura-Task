const { CREATED } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const Category = require('../../../entities/category.entity');

// @desc      add category
// @route     POST /api/v0/category/add
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const { name } = req.body;

  const newCategory = {}
  newCategory.name = name;
  if (req.body.parentId) {
      newCategory.parentId = req.body.parentId;
  }
  // Create product
  const category = await Category.create(newCategory);

  return res
    .status(CREATED)
    .json({ status: true, message: 'Category Created', data: category });
});