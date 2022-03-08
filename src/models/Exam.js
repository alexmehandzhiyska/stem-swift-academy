// const Sequelize = require('sequelize');
// const db = require('../config/database');

// const Exam = db.define('exam', {
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     subject: {
//         type: Sequelize.STRING(70),
//         allowNull: false
//     },
//     section: {
//         type: Sequelize.STRING(40),
//         allowNull: false
//     },
//     duration: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     },
//     instructions: {
//         type: Sequelize.STRING(500),
//         allowNull: false
//     },
//     text: {
//         type: Sequelize.STRING(2500),
//         allowNull: true
//     },
//     link: {
//         type: Sequelize.TEXT,
//         allowNull: true
//     }
// });

// module.exports = Exam;