const { Model } = require('sequelize');
class ProductProvider extends Model {
  static associate(models) {
    models.product.belongsToMany(models.provider, { through: 'product_providers' });
    models.provider.belongsToMany(models.product, { through: 'product_providers' });
  }
  static init(sequelize, DataTypes) {
      return super.init({
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
        sequelize, // We need to pass the connection instance
        tableName: 'product_providers' // We need to choose the model name
      })
  }
}


module.exports = ProductProvider;