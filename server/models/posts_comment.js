'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts_Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Posts_Comment.belongsTo(models.Post) // Posts_Comment : 다  => Post : 1
      models.Posts_Comment.belongsTo(models.Comment) // Posts_Comment : 다  => Comment : 1
    }
  };
  Posts_Comment.init({
    Post_id: DataTypes.INTEGER,
    Comment_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Posts_Comment',
  });
  return Posts_Comment;
};