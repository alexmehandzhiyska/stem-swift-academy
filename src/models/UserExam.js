const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./User');
const Exam = require('./Exam');

const UserExam = db.define('users_exams', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'users_exams',
    timestamps: true
});

UserExam.belongsTo(User, { foreignKey: 'userId', onUpdate: 'cascade', onDelete: 'cascade' });
UserExam.belongsTo(Exam, { foreignKey: 'examId', onUpdate: 'cascade', onDelete: 'cascade' });

module.exports = UserExam;