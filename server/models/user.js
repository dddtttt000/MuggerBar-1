'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.recipe, {foreignKey: "user_id"})
      models.user.hasMany(models.like, {foreignKey: "user_id"})
      models.user.hasMany(models.recipe, {foreignKey: "user_id"})
    }
  };
  user.init({
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_nickname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};