const sequelize = require('../config/database');
const User = require('./User');
const Product = require('./Product');

// Associations
Product.belongsTo(User, { 
  foreignKey: 'userId', 
  as: 'user' 
});

User.hasMany(Product, { 
  foreignKey: 'userId', 
  as: 'products' 
});

module.exports = {
  sequelize,
  User,
  Product
};