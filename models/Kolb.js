'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kolb extends Model {
    static associate(models) {
      // define association here
    }
  }
  Kolb.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    question: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    correct_answer: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    user_answer: {
      type: DataTypes.STRING(200)
    },
    what: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    why: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    how: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
    }
  }, {
    sequelize,
    modelName: 'Kolb',
    timestamps: true,
    underscored: true
  });
  return Kolb;
};