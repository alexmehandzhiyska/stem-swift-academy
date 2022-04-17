'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate(models) {
      // define association here
    }
  }
  Topic.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    subject: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    week_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    time: {
        type: DataTypes.INTEGER,
        default: 4
    },
    course_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Course',
            key: 'id',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
    }
  }, {
    sequelize,
    modelName: 'Topic',
    timestamps: true,
    underscored: true
  });
  return Topic;
};