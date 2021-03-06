const { CREATED } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const Product = require('../../../entities/product.entity');

// @desc      add product
// @route     POST /api/v0/product/add
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const { name, imageUri, categoryId } = req.body;
  // Create product
  const product = await Product.create({ name, imageUri, categoryId });

  return res
    .status(CREATED)
    .json({ status: true, message: 'Product Created', data: product });
});