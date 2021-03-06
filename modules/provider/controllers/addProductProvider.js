const { CREATED } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const Product = require('../../../entities/product.entity');

// @desc      add product
// @route     POST /api/v0/provider/:providerId/product/:productId
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const {productId, providerId} = req.params
  const { price } = req.body;
  // Create product
  const productprovider = await ProductProvider.create({ productId, providerId, price });

  return res
    .status(CREATED)
    .json({ status: true, message: 'Product provider Created', data: productprovider });
});