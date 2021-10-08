'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("recipes", {
      fields: ["user_id"],
      type: "foreign key",
      name: "fk_recipe_user_id",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("comments", {
      fields: ["user_id"],
      type: "foreign key",
      name: "fk_comment_user_id",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("likes", {
      fields: ["user_id"],
      type: "foreign key",
      name: "fk_like_user_id",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("recipes", "user_id");
    await queryInterface.removeColumn("comments", "user_id");
    await queryInterface.removeColumn("likes", "user_id");
  }
};
