'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'exams',
        'timed',
        {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('exams', 'timed')
    ]);
  }
};
