'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_date: {
          type: Sequelize.DATE,
          allowNull: false
      },
      lecturer: {
          type: Sequelize.STRING(50)
      },
      textbook: {
          type: Sequelize.STRING(70)
      },
      lectures_link: {
          type: Sequelize.STRING
      },
      duration: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      weekly_lectures: {
          type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses');
  }
};