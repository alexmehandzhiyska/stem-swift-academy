const db = require('../config/database');
const User = require('./User');
const Exam = require('./Exam');

const UserExam = db.define('users_exams', {}, {
    freezeTableName: true,
    tableName: 'users_exams',
    timestamps: true
});

User.belongsToMany(Exam, { through: UserExam });
Exam.belongsToMany(User, { through: UserExam });


module.exports = UserExam;