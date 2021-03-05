const { DataTypes, Model } = require('sequelize');
const Product = require('./product.entity');
const { sequelize } = require('./../config/db');

class Provider extends Model {}

Provider.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW    
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW   
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'provider' // We need to choose the model name
});

Provider.belongsToMany(Product, { through: 'product_providers' });

module.exports = Provider;