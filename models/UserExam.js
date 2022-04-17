'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserExam extends Model {
    static associate(models) {
      // define association here
    }
  }
  UserExam.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'User',
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade'
      }
    },
    exam_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'Exam',
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade'
      }
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UserExam',
    timestamps: true,
    underscored: true
  });
  return UserExam;
};