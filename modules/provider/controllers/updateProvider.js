const { OK } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const ErrorResponse = require('../../../common/utils/errorResponse');
const Provider = require('../../../entities/provider.entity');

// @desc      update provider
// @route     PUT /api/v0/provider/update/:id
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
 
  const { id } = req.params;

  const provider = await Provider.findOne({ where: { id } });

  if (!provider) {
    return next(new ErrorResponse('No Provider found', NOT_FOUND));
  }
  // update provider
  await Provider.update(req.body, { where: { id }});

  const result = await Provider.findOne({ where: { id } });
  return res
    .status(OK)
    .json({ status: true, message: 'Provider Updated', data: result });
});