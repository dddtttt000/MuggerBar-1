'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가 , Post_Comments 에 되어 있음.
    
    // foreign key 연결
    await queryInterface.addConstraint('Posts_Comments', {
      fields: ['Comment_id'],
      type: 'foreign key',
      name: 'FK_Post_Comments_Comments_id',
      references: {
        table: 'Comments',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Posts_Comments', 'FK_Post_Comments_Comments_id');
  }
};
