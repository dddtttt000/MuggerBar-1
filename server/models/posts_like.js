'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts_Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Posts_Like.belongsTo(models.Post) // Posts_Like : 다  => Post : 1
      models.Posts_Like.belongsTo(models.Like) // Posts_Like : 다  => Lost : 1
    }
  };
  Posts_Like.init({
    Post_id: DataTypes.INTEGER,
    Like_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Posts_Like',
  });
  return Posts_Like;
};