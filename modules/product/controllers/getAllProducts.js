const { OK } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');

// @desc      get all products
// @route     GET /api/v0/product/all?page=
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  return res
    .status(OK)
    .json({ status: true, message: 'All Products retrieved successfully', data: res.paginatedResult });
});