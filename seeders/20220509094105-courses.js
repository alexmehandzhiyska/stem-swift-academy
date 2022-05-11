'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
       start_date: '2022-01-04',
       end_date: '2022-01-28',
       lecturer: 'Simon Theodore',
       textbook: 'Princeton SAT prep',
       lectures_link: 'https://zoom.us/A0zHG5',
       duration: 1,
       weekly_lectures: 2,
       created_at: '2022-04-25 23:41:00.707+03',
       updated_at: '2022-04-25 23:41:00.707+03'
     },
     {
      start_date: '2021-01-03',
      end_date: '2022-03-25',
      lecturer: 'Liam Finch',
      textbook: 'Barrons SAT, 4th Edition',
      lectures_link: 'https://zoom.us/P1iyG7',
      duration: 3,
      weekly_lectures: 1,
      created_at: '2022-04-25 23:41:00.707+03',
      updated_at: '2022-04-25 23:41:00.707+03'
     }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('courses', null, {});
  }
};
