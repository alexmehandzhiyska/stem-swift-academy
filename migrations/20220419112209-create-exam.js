'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      section: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      instructions: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      text: Sequelize.STRING(5000),
      link: Sequelize.STRING,
      difficulty: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('exams');
  }
};