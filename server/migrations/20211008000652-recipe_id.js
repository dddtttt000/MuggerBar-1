'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("likes", {
      fields: ["recipe_id"],
      type: "foreign key",
      name: "fk_likes_user_id",
      references: {
        table: "recipes",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("comments", {
      fields: ["recipe_id"],
      type: "foreign key",
      name: "fk_comments_user_id",
      references: {
        table: "recipes",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("recipes", "recipe_id");
    await queryInterface.removeColumn("comments", "recipe_id");
  }
};
