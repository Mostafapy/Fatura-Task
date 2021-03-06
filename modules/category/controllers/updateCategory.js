const { OK } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const ErrorResponse = require('../../../common/utils/errorResponse');
const Category = require('../../../entities/category.entity');

// @desc      update category
// @route     PUT /api/v0/category/update/:id
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
 
  const { id } = req.params;

  const category = await Category.findOne({ where: { id } });

  if (!category) {
    return next(new ErrorResponse('No Category found', NOT_FOUND));
  }
  // update category
  await Category.update(req.body, { where: { id }});

  const result = await Category.findOne({ where: { id } });
  return res
    .status(OK)
    .json({ status: true, message: 'Provider Updated', data: result });
});