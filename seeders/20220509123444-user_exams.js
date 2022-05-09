'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_exams', [
      {
        user_id: 3,
        exam_id: 1,
        score: 8,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        user_id: 3,
        exam_id: 2,
        score: 5,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        user_id: 3,
        exam_id: 4,
        score: 6,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        user_id: 3,
        exam_id: 5,
        score: 8,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
   ], {});
  },

  async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('user_exams', null, {});
  }
};
