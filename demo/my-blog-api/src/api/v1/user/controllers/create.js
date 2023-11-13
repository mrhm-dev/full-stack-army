const userService = require('../../../../lib/user');

const create = async (req, res, next) => {
  const { name, email, password, role, status } = req.body;

  try {
    const user = await userService.create({
      name,
      email,
      password,
      role,
      status,
    });

    const response = {
      code: 201,
      message: 'User Created Successfully',
      data: { ...user },
      links: {
        self: `/users/${user.id}`,
        edit: `/users/${user.id}/edit`,
        delete: `/users/${user.id}/delete`,
        view: `/users/${user.id}/view`,
      },
    };

    res.status(201).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = create;
