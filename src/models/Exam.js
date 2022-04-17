const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Exam = db.define('exam', {
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
    text: {
        type: DataTypes.STRING(5000)
    },
    link: {
        type: DataTypes.STRING
    },
    difficulty: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'exams',
    timestamps: true
});

module.exports = Exam;