const { OK, NOT_FOUND } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const ErrorResponse = require('../../../common/utils/errorResponse');
const Product = require('../../../entities/product.entity');

// @desc      delete product by Id
// @route     DELETE /api/v0/product/:id
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  // Get product by id
  const product = await Product.findOne({ where: { id } });

  if (!product) {
    return next(new ErrorResponse('No Product found', NOT_FOUND));
  }

  await Product.destroy({where : { id }})
  return res
    .status(OK)
    .json({ status: true, message: 'Product Deleted Successfully', data: null });
});