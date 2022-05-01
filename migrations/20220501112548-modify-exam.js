'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'exams',
        'questions_count',
        {
          type: Sequelize.INTEGER,
          allowNull: true
        }
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('exams', 'questions_count')
    ]);
  }
};
