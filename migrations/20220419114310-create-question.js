'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING(30),
        defaultValue: 'radiogroup'
      },
      title: {
          type: Sequelize.STRING(1000),
          allowNull: false
      },
      image_url: {
        type: Sequelize.STRING(300),
        allowNull: true
      },
      correct_answer: {
          type: Sequelize.STRING(200),
          allowNull: false
      },
      explanation: {
          type: Sequelize.STRING(2000)
      },
      subject: {
          type: Sequelize.STRING(30),
          allowNull: true
      },
      exam_id: {
          type: Sequelize.INTEGER,
          references: {
              model: 'exams',
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
    await queryInterface.dropTable('questions');
  }
};