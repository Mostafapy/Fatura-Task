const { NOT_FOUND } = require("http-status-codes");
const asyncHandler = require("../../../common/middleware/async");
const ErrorResponse = require("../../../common/utils/errorResponse");
const Category = require("../../../entities/category.entity");
const Product = require("../../../entities/product.entity");

// @desc      add or product category
// @route     PUT  /api/v0/product/:id/category/:categoryId
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
     const { id, categoryId } =  req.params;
     const product = await Product.findOne({ where: { id }});

     if (!product) {
        return next(new ErrorResponse('No product found', NOT_FOUND));
     }

     const category = await Category.findOne({ where: { id: categoryId }});

     if (!Category) {
        return next(new ErrorResponse('No category found', NOT_FOUND));
     }
     if (product.categoryId && product.categoryId == category.id) {
         product.categoryId = null
     } else if (!product.categoryId) {
         await Product.update({ categoryId }, {where: { id: product.id }});
     } else if (product.categoryId != category.id) {
        return next(new ErrorResponse('No Product found', NOT_FOUND));
     }

      // Get product by id
      return await Product.findOne({ where: { id } });
});
