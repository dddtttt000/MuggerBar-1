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
    return queryInterface.bulkInsert("Posts", [
      {
        id: 0,
        User_id: 1,
        Post_title: "사리곰탕 콩국수",
        Post_subTitle: "사리곰탕으로 만드는 콩국수",
        Post_Photo: null, //blob 표현 방법
        Post_Content: "요리방법#1, 요리방법#2, 요리방법#3",
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
    return queryInterface.bulkDelete("Posts", null, {});
  }
};
