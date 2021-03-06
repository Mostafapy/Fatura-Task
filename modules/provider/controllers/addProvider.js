const { CREATED } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const Provider = require('../../../entities/provider.entity');

// @desc      add provider
// @route     POST /api/v0/provider/add
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  // Create provider
  const provider = await Provider.create({ name });

  return res
    .status(CREATED)
    .json({ status: true, message: 'Provider Created', data: provider });
});