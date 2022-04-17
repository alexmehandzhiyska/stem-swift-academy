const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./User');
const Course = require('./Course');

const UserCourse = db.define('users_courses', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
}, {
    freezeTableName: true,
    tableName: "users_courses",
    timestamps: true
});

UserCourse.belongsTo(User, { foreignKey: 'userId', onUpdate: 'cascade', onDelete: 'cascade' });
UserCourse.belongsTo(Course, { foreignKey: 'courseId', onUpdate: 'cascade', onDelete: 'cascade' });

module.exports = UserCourse;