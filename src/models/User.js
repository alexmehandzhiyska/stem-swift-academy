const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Course = require('./Course');

const User = db.define('user', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'student'
    }
}, {
    freezeTableName: true,
    tableName: "users",
    timestamps: true
});

module.exports = User;