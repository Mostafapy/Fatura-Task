module.exports = model => {
    return async (req, res, next) => {
      const page = parseInt(req.query.page);
      const limit = 25;
      pageNumber -= 1;
  
      const data = await model.findAll();
      
      const result  = data.slice(page * limit, (page + 1) * limit);
 
      res.paginatedResult = {
        items: result,
        currentPage: page,
        perPage: limit,
        total: result.length,
        totalPages: Math.ceil(result.length / limit),
      }

      next();
    }
}