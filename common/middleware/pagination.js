module.exports = model => {
    return async (req, res, next) => {
      const page = parseInt(req.query.page);
      const limit = 25;
      pageNumber -= 1;
  
      const conditions = {};
      if (Object.keys(req.query).length > 1) {
        const keys = Object.keys(req.query).filter(key => key != 'page');
        keys.forEach(key => {
            conditions[key] = req.query[key];
        })
      }
      const data = await model.findAll(conditions);

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