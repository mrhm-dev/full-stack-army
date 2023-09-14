const { Article } = require('../../model');
const defaults = require('../../config/defaults');
const { notFound, badRequest } = require('../../utils/error');
const updateArticleV2 = require('./updateArticleV2');

/**
 * Find all articles
 * Pagination
 * Searching
 * Sorting
 * @param{*} param0
 * @returns
 */
const findAllItems = async ({
  page = defaults.page,
  limit = defaults.limit,
  sortType = defaults.sortType,
  sortBy = defaults.sortBy,
  search = defaults.search,
}) => {
  const sortStr = `${sortType === 'dsc' ? '-' : ''}${sortBy}`;
  const filter = {
    title: { $regex: search, $options: 'i' },
  };

  const articles = await Article.find(filter)
    .populate({ path: 'author', select: 'name' })
    .sort(sortStr)
    .skip(page * limit - limit)
    .limit(limit);

  return articles.map((article) => ({
    ...article._doc,
    id: article.id,
  }));
};

/**
 * Count all article
 * @param {*} param0
 * @returns
 */
const count = ({ search = '' }) => {
  const filter = {
    title: { $regex: search, $options: 'i' },
  };

  return Article.count(filter);
};

/**
 * Create a new article
 * @param {*} param0
 * @returns
 */
const create = async ({
  title,
  body = '',
  cover = '',
  status = 'draft',
  author,
}) => {
  if (!title || !author) throw badRequest('Invalid parameters');

  const article = new Article({
    title,
    body,
    cover,
    status,
    author: author.id,
  });

  await article.save();
  return {
    ...article._doc,
    id: article.id,
  };
};

/**
 * Find a single article
 * @param {*} param0
 * @returns
 */
const findSingleItem = async ({ id, expand = '' }) => {
  if (!id) throw new Error('Id is required');

  expand = expand.split(',').map((item) => item.trim());

  const article = await Article.findById(id);
  if (!article) {
    throw notFound();
  }

  if (expand.includes('author')) {
    await article.populate({
      path: 'author',
      select: 'name',
      strictPopulate: false,
    });
  }

  if (expand.includes('comment')) {
    await article.populate({
      path: 'comments',
      strictPopulate: false,
    });
  }

  return {
    ...article._doc,
    id: article.id,
  };
};

const updateOrCreate = async (
  id,
  { title, body, author, cover = '', status = 'draft' }
) => {
  const article = await Article.findById(id);

  if (!article) {
    const article = await create({ title, body, cover, status, author });
    return {
      article,
      code: 201,
    };
  }

  const payload = {
    title,
    body,
    cover,
    status,
    author: author.id,
  };

  article.overwrite(payload);
  await article.save();

  return { article: { ...article._doc, id: article.id }, code: 200 };
};

const updateProperties = async (id, { title, body, cover, status }) => {
  const article = await Article.findById(id);
  if (!article) {
    throw notFound();
  }

  const payload = { title, body, cover, status };

  Object.keys(payload).forEach((key) => {
    article[key] = payload[key] ?? article[key];
  });

  await article.save();
  return { ...article._doc, id: article.id };
};

const removeItem = async (id) => {
  const article = await Article.findById(id);
  if (!article) {
    throw notFound();
  }

  // TODO:
  // Asynchronously Delete all associated comments

  return Article.findByIdAndDelete(id);
};

const checkOwnership = async ({ resourceId, userId }) => {
  const article = await Article.findById(resourceId);
  if (!article) throw notFound();

  if (article._doc.author.toString() === userId) {
    return true;
  }
  return false;
};

module.exports = {
  findAllItems,
  create,
  count,
  findSingleItem,
  updateOrCreate,
  updateProperties,
  removeItem,
  updateArticleV2,
  checkOwnership,
};
