const { userExist, createUser, findUserByEmail } = require('../user');
const { badRequest } = require('../../utils/error');
const { generateHash, hashMatched } = require('../../utils/hashing');
const { generateToken } = require('../token');

const register = async ({ name, email, password }) => {
  const hasUser = await userExist(email);
  if (hasUser) {
    throw badRequest('User already exist');
  }

  password = await generateHash(password);
  const user = await createUser({ name, email, password });

  return user;
};

const login = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw badRequest('Invalid Credentials');
  }

  const matched = await hashMatched(password, user.password);
  if (!matched) {
    throw badRequest('Invalid Credentials');
  }

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  return generateToken({ payload });
};

module.exports = {
  register,
  login,
};
