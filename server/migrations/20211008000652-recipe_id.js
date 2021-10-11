'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("likes", {
      fields: ["recipe_id"],
      type: "foreign key",
      name: "fk_likes_recipes_id",
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
      name: "fk_comments_recipes_id",
      references: {
        table: "recipes",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("recipes", "fk_likes_recipes_id");
    await queryInterface.removeConstraint("comments", "fk_comments_recipes_id");
  }
};
