const { DataTypes, Model } = require('sequelize');
const Category = require('./category.entity');
const Provider = require('./provider.entity');
const { init } = require('./../config/db');

class ProductProvider extends Model {}

ProductProvider.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  imageUri: {
    type: DataTypes.STRING(255),
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
  productId: {
    type: DataTypes.INTEGER,
    references: {
     model: 'product', // 'product' refers to table name
     key: 'id', // 'id' refers to column name in product table
    }
  },
  providerId: {
    type: DataTypes.INTEGER,
    references: {
     model: 'provider', // 'product' refers to table name
     key: 'id', // 'id' refers to column name in product table
    }
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  available: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  // Other model options go here
  sequelize: init(), // We need to pass the connection instance
  modelName: 'product_providers' // We need to choose the model name
});

module.exports = ProductProvider;