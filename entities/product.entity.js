const { DataTypes, Model } = require('sequelize');
const Category = require('./category.entity');
const Provider = require('./provider.entity');
const { init } = require('./../config/db');

class Product extends Model {}

Product.init({
  // Model attributes are defined here
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW    
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW   
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
     model: 'product', // 'category' refers to table name
     key: 'id', // 'id' refers to column name in category table
    }
  },
  providerId: {
    type: DataTypes.INTEGER,
    references: {
     model: 'product', // 'category' refers to table name
     key: 'id', // 'id' refers to column name in category table
    }
  }
}, {
  // Other model options go here
  sequelize: init(), // We need to pass the connection instance
  modelName: 'product' // We need to choose the model name
});

Product.belongsTo(Category);

Product.belongsToMany(Provider, { through: 'product_providers' });

module.exports = Product;