'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    lecturer: {
        type: DataTypes.STRING(50)
    },
    textbook: {
        type: DataTypes.STRING(70)
    },
    lectures_link: {
        type: DataTypes.STRING
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weekly_lectures: {
        type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Course',
    timestamps: true,
    underscored: true
  });
  return Course;
};