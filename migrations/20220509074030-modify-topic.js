'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'topics',
        'recording_link',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),
      queryInterface.addColumn(
        'topics',
        'exam_link',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('topics', 'recording_link'),
      queryInterface.removeColumn('topics', 'exam_link')
    ]);
  }
};
