const { Model } = require('sequelize');
class Category extends Model {

  static associate(models) {
    this.hasMany(models.product,  { foreignKey: 'categoryId'})
    this.hasOne(this, { as: 'parent' });
  }

  static init(sequelize, DataTypes) {
    return super.init({
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
      sequelize, // We need to pass the connection instance
      tableName: 'category' // We need to choose the model name
    });
  }
}

module.exports = Category;