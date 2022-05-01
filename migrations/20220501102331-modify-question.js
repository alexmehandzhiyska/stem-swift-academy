'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'questions',
        'subject'
      ),
      queryInterface.addColumn(
        'questions',
        'exam_type',
        {
          type: Sequelize.STRING(30),
          allowNull: true
        }
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('questions', 'exam_type'),
      queryInterface.addColumn(
        'questions',
        'subject',
        {
          type: Sequelize.STRING(30),
          allowNull: false
        }
      )
    ]);
  }
};
