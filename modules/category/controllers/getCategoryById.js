const { OK, NOT_FOUND } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const ErrorResponse = require('../../../common/utils/errorResponse');
const Category = require('../../../entities/category.entity');

// @desc      get category by Id
// @route     GET /api/v0/category/:id
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  // Get category by id
  const category = await Category.findOne({ where: { id } });

  if (!category) {
    return next(new ErrorResponse('No category found', NOT_FOUND));
  }
  return res
    .status(OK)
    .json({ status: true, message: 'required category retrieved successfully', data: category });
});