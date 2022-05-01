'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(40),
      defaultValue: 'student'
    },
    country: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    school: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    graduation_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      min: 2022
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    underscored: true
  });
  return User;
};