'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가 , Post_Like, Post_Comments에 되어 있음.
    
    // foreign key 연결
    await queryInterface.addConstraint('Posts_Likes', {
      fields: ['Post_id'],
      type: 'foreign key',
      name: 'FK_Post_Likes_Post_id',
      references: {
        table: 'Posts',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Posts_Comments', {
      fields: ['Post_id'],
      type: 'foreign key',
      name: 'FK_Post_Comments_Post_id',
      references: {
        table: 'Posts',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Posts_Likes', 'FK_Post_Likes_Post_id');
    await queryInterface.removeConstraint('Posts_Comments', 'FK_Post_Comments_Post_id');
  }
};
