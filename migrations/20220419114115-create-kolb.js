'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kolbs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      correct_answer: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      user_answer: {
        type: Sequelize.STRING(200)
      },
      what: {
          type: Sequelize.STRING(1000),
          allowNull: false
      },
      why: {
          type: Sequelize.STRING(1000),
          allowNull: false
      },
      how: {
          type: Sequelize.STRING(1000),
          allowNull: false
      },
      user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'users',
              key: 'id',
              onUpdate: 'cascade',
              onDelete: 'cascade'
          }
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
    await queryInterface.dropTable('kolbs');
  }
};