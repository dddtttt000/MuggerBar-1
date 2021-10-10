'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.like.belongsTo(models.user, {foreignKey: "user_id"})
      models.like.belongsTo(models.recipe, {foreignKey: "recipe_id"})
    }
  };
  like.init({
    user_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'like',
  });
  return like;
};