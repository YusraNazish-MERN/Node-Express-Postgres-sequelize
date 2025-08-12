const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

class User extends Model {
  // instance method to compare password
  async comparePassword(plain) {
    return bcrypt.compare(plain, this.password);
  }

  toJSON() {
    // override to hide password when converting to JSON
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Name is required' },
      len: { args: [2, 100], msg: 'Name must be between 2 and 100 characters' }
    }
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: { msg: 'Email already in use' },
    validate: {
      notEmpty: { msg: 'Email is required' },
      isEmail: { msg: 'Email is not valid' }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Password is required' },
      len: { args: [6, 200], msg: 'Password must be at least 6 characters' }
    }
  },
  role: {
    type: DataTypes.ENUM('user','admin'),
    allowNull: false,
    defaultValue: 'user'
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true,
  underscored: false
});

// Hooks: hash password before creating/updating
User.beforeCreate(async (user, options) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

User.beforeUpdate(async (user, options) => {
  if (user.changed('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

module.exports = User;
