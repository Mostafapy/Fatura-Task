const { DataTypes, Model } = require('sequelize');
const { init } = require('./../config/db');
const Product = require('./product.entity');

class Category extends Model {}

Category.init({
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
  parentId: {
    type: DataTypes.INTEGER,
    references: {
     model: 'category', // 'category' refers to table name
     key: 'id', // 'id' refers to column name in category table
    }
  }
}, {
  // Other model options go here
  sequelize: init(), // We need to pass the connection instance
  modelName: 'category' // We need to choose the model name
});

Category.hasMany(Product, { as: 'category', foreignKey: 'categoryId'});

Category.hasOne(Category, {as: 'parent', foreignKey: 'parentId'});

module.exports = Category;