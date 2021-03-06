const asyncHandler = require("../../../common/middleware/async");
const ProductProvider = require("../../../entities/productProviders.entity");

module.exports = asyncHandler(async (req, res, next) => {
    // Create product provider
    const productProvider = await ProductProvider.create(req.body);
  
    return res
      .status(CREATED)
      .json({ status: true, message: 'ProductProvider Created', data: productProvider });

});