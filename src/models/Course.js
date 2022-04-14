const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Course = db.define('course', {
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    lecturer: {
        type: DataTypes.STRING(50)
    },
    textbook: {
        type: DataTypes.STRING(70)
    },
    lectures_link: {
        type: DataTypes.STRING
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weekly_lectures: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    tableName: "courses",
    timestamps: true
});

module.exports = Course;