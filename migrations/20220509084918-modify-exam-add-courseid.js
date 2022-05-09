'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'exams',
        'course_id',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'courses',
            key: 'id',
            onUpdate: 'cascade',
            onDelete: 'cascade'
          }
        }
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('exams', 'course_id')
    ]);
  }
};
