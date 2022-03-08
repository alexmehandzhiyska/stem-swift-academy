// const Sequelize = require('sequelize');
// const db = require('../config/database');
// const User = require('./User');

// const Course = db.define('course', {
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     start_date: {
//         type: Sequelize.DATE,
//         allowNull: false
//     },
//     end_date: {
//         type: Sequelize.DATE,
//         allowNull: false
//     },
//     lecturer: {
//         type: Sequelize.STRING(50),
//         defaultValue: 'TBA'
//     },
//     textbook: {
//         type: Sequelize.STRING(70),
//         defaultValue: 'TBA'
//     },
//     lectures_link: {
//         type: Sequelize.TEXT,
//         defaultValue: 'TBA'
//     },
//     duration: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     },
//     weekly_lectures: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     }
// });

// module.exports = Course;