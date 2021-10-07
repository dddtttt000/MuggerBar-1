'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가 , Post_Likes 에 되어 있음.
    
    // foreign key 연결
    await queryInterface.addConstraint('Posts_Likes', {
      fields: ['Like_id'],
      type: 'foreign key',
      name: 'FK_Post_Likes_Like_id',
      references: {
        table: 'Likes',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Post_Likes', 'FK_Post_Likes_Like_id');
  }
};
