const { Model } = require('sequelize');

class Provider extends Model {
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
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        tableName: 'provider' // We need to choose the model name
      })
   }
}

module.exports = Provider;