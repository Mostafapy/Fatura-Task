const { OK, NOT_FOUND } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const ErrorResponse = require('../../../common/utils/errorResponse');
const Category = require('../../../entities/category.entity');
const ProductProvider = require('../../../entities/productProviders.entity');

// @desc      get category by Id
// @route     GET /api/v0/product/category/?page=&categoryId=
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const products = res.paginatedResult.items;

  if (products.length) {
   const productIds = products.map(product => product.id);

   const promiseArr = [];
   productIds.forEach(productId => {
      promiseArr.push(ProductProvider.findOne({ where: { productId }}));
   });

   const productProviders = await Promise.all(promiseArr);
   // sort by price
   const productProvidersSorted = productProviders.sort((a, b)  => a.price - b.price );

   const items = [];

   productProvidersSorted.forEach(ele => {
    items.push(products.find(product => product.id == ele.id))
   });

   res.paginatedResult.items  = items;

  }
  items.push()
  return res
    .status(OK)
    .json({ status: true, message: 'required category retrieved successfully', data: res.paginatedResult });
});