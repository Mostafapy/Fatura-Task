const { OK, NOT_FOUND } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const ErrorResponse = require('../../../common/utils/errorResponse');
const Provider = require('../../../entities/provider.entity');

// @desc      get provider by Id
// @route     GET /api/v0/provider/:id
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  // Get product by id
  const provider = await Provider.findOne({ where: { id } });

  if (!provider) {
    return next(new ErrorResponse('No Provider found', NOT_FOUND));
  }
  return res
    .status(OK)
    .json({ status: true, message: 'required provider retrieved successfully', data: provider });
});