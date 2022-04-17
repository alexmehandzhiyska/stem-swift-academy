'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    static associate(models) {
      // define association here
    }
    
  }
  UserCourse.init({
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
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'Course',
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade'
      }
    }
  }, {
    sequelize,
    modelName: 'UserCourse',
    timestamps: true,
    underscored: true
  });
  return UserCourse;
};