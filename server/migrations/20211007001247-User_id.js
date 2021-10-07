'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가 , Likes, Posts, Comments 에 되어 있음.
    
    // foreign key 연결
    await queryInterface.addConstraint('Likes', {
      fields: ['User_id'],
      type: 'foreign key',
      name: 'FK_Likes_User_id',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Posts', {
      fields: ['User_id'],
      type: 'foreign key',
      name: 'FK_Posts_User_id',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Comments', {
      fields: ['User_id'],
      type: 'foreign key',
      name: 'FK_Comments_User_id',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Likes', 'FK_Likes_User_id');
    await queryInterface.removeConstraint('Posts', 'FK_Posts_User_id');
    await queryInterface.removeConstraint('Comments', 'FK_Comments_User_id');
  }
};
