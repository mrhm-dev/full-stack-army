const defaults = require('../../../../config/defaults');
const userService = require('../../../../lib/user');
const { query } = require('../../../../utils');

const findAllItems = async (req, res, next) => {
  // extract query params
  const page = req.query.page || defaults.page;
  const limit = req.query.limit || defaults.limit;
  const sortType = req.query.sort_type || defaults.sortType;
  const sortBy = req.query.sort_by || defaults.sortBy;
  const name = req.query.name || '';
  const email = req.query.email || '';

  try {
    // data
    const users = await userService.findAllItems({
      page,
      limit,
      sortType,
      sortBy,
      name,
      email,
    });

    const data = query.getTransformedItems({
      items: users,
      selection: ['id', 'name', 'email', 'updatedAt', 'createdAt'],
      path: '/users',
    });

    // pagination
    const totalItems = await userService.count({ name, email });
    const pagination = query.getPagination({ totalItems, limit, page });

    // HATEOAS Links
    const links = query.getHATEOASForAllItems({
      url: req.url,
      path: req.path,
      query: req.query,
      hasNext: !!pagination.next,
      hasPrev: !!pagination.prev,
      page,
    });

    // generate response
    res.status(200).json({
      data,
      pagination,
      links,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = findAllItems;
