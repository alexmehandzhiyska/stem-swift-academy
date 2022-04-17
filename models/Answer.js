'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      // define association here
    }
  }
  Answer.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Question',
            key: 'id',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
    }
  }, {
    sequelize,
    modelName: 'Answer',
    timestamps: true,
    underscored: true
  });
  return Answer;
};