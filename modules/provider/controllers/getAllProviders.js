const { OK } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');

// @desc      get all providers
// @route     GET /api/v0/povider/all?page=
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  return res
    .status(OK)
    .json({ status: true, message: 'All Providers retrieved successfully', data: res.paginatedResult });
});