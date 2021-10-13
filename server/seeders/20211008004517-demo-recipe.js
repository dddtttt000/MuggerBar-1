'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert("recipes", [
      {
        id: 1,
        user_id: 1,
        recipe_title: "사리곰탕 콩국수",
        recipe_subtitle: "사리곰탕으로 만드는 콩국수",
        recipe_photo: '이미지주소', //blob 표현 방법
        recipe_content: "요리방법#1, 요리방법#2, 요리방법#3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete("recipes", null, {});
  }
};
