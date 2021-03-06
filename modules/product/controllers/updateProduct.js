const { OK } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const ErrorResponse = require('../../../common/utils/errorResponse');
const Product = require('../../../entities/product.entity');

// @desc      update product
// @route     PUT /api/v0/product/update/:id
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
 
  const { id } = req.params;

  const product = await Product.findOne({ where: { id } });

  if (!product) {
    return next(new ErrorResponse('No Product found', NOT_FOUND));
  }
  // update product
  await Product.update(req.body, { where: { id }});;

  const result = await Product.findOne({ where: { id } });
  return res
    .status(OK)
    .json({ status: true, message: 'Provider Updated', data: result });
});