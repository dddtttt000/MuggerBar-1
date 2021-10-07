'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comment.hasmany(models.Post_Comment) // Comment : 1  => Post_Comment : 다
      models.Comment.belongsTo(models.User) // Comment : 다  => User : 1
    }
  };
  Comment.init({
    User_id: DataTypes.INTEGER,
    Comment_Content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};