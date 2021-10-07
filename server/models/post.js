'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.hasmany(models.Post_Like) // Users : 1  => Post_Like : 다
      models.Post.hasmany(models.Post_Comment) // Users : 1  => Post_Comment : 다
      models.Post.belongsTo(models.User) // Post : 다  => User : 1
    }
  };
  Post.init({
    User_id: DataTypes.INTEGER,
    Post_title: DataTypes.STRING,
    Post_subTitle: DataTypes.STRING,
    Post_Photo: DataTypes.BLOB,
    Post_Content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};