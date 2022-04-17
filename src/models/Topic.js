const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Course = require('../models/Course');

const Topic = db.define('topic', {
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
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id'
        }
    }
}, {
    freezeTableName: true,
    tableName: "topics",
    timestamps: true
});

Topic.belongsTo(Course, { as: 'Course', foreignKey: 'courseId' });

module.exports = Topic;