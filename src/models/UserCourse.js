const db = require('../config/database');
const User = require('./User');
const Course = require('./Course');

const UserCourse = db.define('users_courses', {}, {
    freezeTableName: true,
    tableName: "users_courses",
    timestamps: true
});

User.belongsToMany(Course, { through: UserCourse });
Course.belongsToMany(User, { through: UserCourse });

module.exports = UserCourse;