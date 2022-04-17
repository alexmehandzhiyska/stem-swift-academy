'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('topics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      subject: {
          type: Sequelize.STRING(50),
          allowNull: false
      },
      week_number: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      date: {
          type: Sequelize.DATE,
          allowNull: false
      },
      time: {
          type: Sequelize.INTEGER,
          default: 4
      },
      course_id: {
          type: Sequelize.INTEGER,
          references: {
              model: 'courses',
              key: 'id',
              onUpdate: 'cascade',
              onDelete: 'cascade'
          },
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
    await queryInterface.dropTable('topics');
  }
};