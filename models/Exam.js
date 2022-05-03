'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    static associate(models) {
      // define association here
    }
  }
  Exam.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    section: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    instructions: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    text: DataTypes.STRING(5000),
    link: DataTypes.STRING,
    difficulty: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    questions_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Exam',
    timestamps: true,
    underscored: true
  });
  return Exam;
};