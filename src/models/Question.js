// const Sequelize = require('sequelize');
// const db = require('../config/database');
// const Exam = require('./Exam');

// const Question = db.define('question', {
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     type: {
//         type: Sequelize.STRING(100),
//         allowNull: false,
//         defaultValue: 'radiogroup'
//     },
//     title: {
//         type: Sequelize.STRING(100),
//         allowNull: false
//     },
//     correctAnswer: {
//         type: Sequelize.STRING(200),
//         allowNull: false
//     }
// });

// Question.belongsTo(Exam);

// module.exports = Question;