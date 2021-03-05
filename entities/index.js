const { DataTypes } = require('sequelize');
const Category = require('./category.entity');
const Product = require('./product.entity');
const ProductProvider = require('./productProviders.entity');
const Provider = require('./provider.entity');

const initializeEntities = (sequelize) => {
    const models = {
        product: Product.init(sequelize, DataTypes),
        category: Category.init(sequelize, DataTypes),
        provider: Provider.init(sequelize, DataTypes),
        productProvider: ProductProvider.init(sequelize, DataTypes)
    };
      
    // Run `.associate` if it exists,
    // ie create relationships in the ORM
    Object.values(models)
      .filter(model => typeof model.associate === "function")
      .forEach(model => model.associate(models));
      
    const db = {
        ...models,
        sequelize
    };

    return db
}

module.exports = initializeEntities;