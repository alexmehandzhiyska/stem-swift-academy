const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./User');
const Exam = require('./Exam');

const UserExam = db.define('users_exams', {
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'users_exams',
    timestamps: true
});

User.belongsToMany(Exam, { through: UserExam, onUpdate: 'cascade', onDelete: 'cascade' });
Exam.belongsToMany(User, { through: UserExam, onUpdate: 'cascade', onDelete: 'cascade' });


module.exports = UserExam;