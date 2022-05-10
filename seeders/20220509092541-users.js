'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [
       {
        name: 'Alexandrina Mehandzhiyska',
        email: 'alexandrina.mehandzhiyska1@gmail.com',
        password: '$2b$10$ri7AUCHdV2z2uHkWhiF1kO73bWFqzl05NrK6K4ZJTGdb1Vd6gjFbu',
        role: 'owner',
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        name: 'Ivan Ivanov',
        email: 'ivan@abv.bg',
        password: '$2b$10$ri7AUCHdV2z2uHkWhiF1kO73bWFqzl05NrK6K4ZJTGdb1Vd6gjFbu',
        role: 'teacher',
        created_at: '2022-04-28 23:41:00.707+03',
        updated_at: '2022-04-28 23:41:00.707+03'
      },
      {
        name: 'Hermione Granger',
        email: 'hermione@abv.bg',
        password: '$2b$10$hTfvNYWjbtJZ/AtSakycMuskM2S7FY8DP0UlSiPaTSdlf.c06mDE2',
        role: 'student',
        country: 'Scotland',
        city: 'Dufftown',
        school: 'Hogwarts',
        graduation_year: 2024,
        created_at: '2022-04-28 23:41:00.707+03',
        updated_at: '2022-04-28 23:41:00.707+03'
      },
      {
        name: 'Draco Malfoy',
        email: 'draco@abv.bg',
        password: '$2b$10$pePGWSoxcPyGigK1/X5Y/OQgK4BeWSOKZ130g21JiRDSkVSb0gPn6',
        role: 'student',
        country: 'Scotland',
        city: 'Dufftown',
        school: 'Hogwarts',
        graduation_year: 2023,
        created_at: '2022-04-28 23:41:00.707+03',
        updated_at: '2022-04-28 23:41:00.707+03'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
