const authService = require('../../../../lib/auth');
const { generateToken } = require('../../../../lib/token');

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const user = await authService.register({ name, email, password });

    // generate access token
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    console.log('payload', payload);
    const accessToken = generateToken({ payload });

    // response
    const response = {
      code: 201,
      message: 'Signup successful',
      data: {
        access_token: accessToken,
      },
      links: {
        self: req.url,
        login: '/auth/login',
      },
    };

    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = register;
