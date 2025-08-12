const User = require('../models/User');

const handleSequelizeError = (err) => {
  // make a friendly message for validation/unique errors
  if (err.name === 'SequelizeUniqueConstraintError') {
    return { status: 400, message: err.errors[0].message || 'Unique constraint error' };
  }
  if (err.name === 'SequelizeValidationError') {
    return { status: 400, message: err.errors.map(e => e.message).join(', ') };
  }
  return { status: 500, message: 'Internal server error' };
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await User.create({ name, email, password, role });
    return res.status(201).json(user); // toJSON hides password
  } catch (err) {
    const e = handleSequelizeError(err);
    console.error(err);
    return res.status(e.status).json({ error: e.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ order: [['id','ASC']] });
    return res.json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email, password, role } = req.body;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    if (password) user.password = password; // hook will hash
    user.role = role ?? user.role;

    await user.save();
    return res.json(user);
  } catch (err) {
    const e = handleSequelizeError(err);
    console.error(err);
    return res.status(e.status).json({ error: e.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    await user.destroy();
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};
