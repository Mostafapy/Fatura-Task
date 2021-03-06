const { OK } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');

// @desc      get all categories
// @route     GET /api/v0/category/all?page=
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  return res
    .status(OK)
    .json({ status: true, message: 'All categories retrieved successfully', data: res.paginatedResult });
});