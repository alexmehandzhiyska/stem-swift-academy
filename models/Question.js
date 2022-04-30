'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      // define association here
    }
  }
  Question.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(30),
      defaultValue: 'radiogroup'
    },
    title: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    image_url: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    correct_answer: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    explanation: {
        type: DataTypes.STRING(2000),
        allowNull: true
    },
    subject: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    exam_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Exam',
            key: 'id',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
    }
  }, {
    sequelize,
    modelName: 'Question',
    timestamps: true,
    underscored: true
  });
  return Question;
};