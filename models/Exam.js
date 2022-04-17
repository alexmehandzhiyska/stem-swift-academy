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
    subject: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    }
  }, {
    sequelize,
    modelName: 'Exam',
    timestamps: true,
    underscored: true
  });
  return Exam;
};