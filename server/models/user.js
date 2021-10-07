'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasmany(models.Like) // Users : 1  => Likes : 다
      models.User.hasmany(models.Post) // Users : 1  => Posts : 다
      models.User.hasmany(models.Commnets) // Users : 1  => Commnets : 다
    }
  };
  User.init({
    User_Email: DataTypes.STRING,
    User_Password: DataTypes.STRING,
    User_Nickname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};