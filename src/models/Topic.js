// const Sequelize = require('sequelize')
// const db = require('../config/database');
// const Course = require('./Course');

// const Topic = db.define('topic', {
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     title: {
//         type: Sequelize.STRING(100),
//         allowNull: false
//     },
//     subject: {
//         type: Sequelize.STRING(70),
//         allowNull: false
//     },
//     week_number: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     },
//     date: {
//         type: Sequelize.DATE,
//         allowNull: false
//     }
// });

// Topic.belongsTo(Course);

// module.exports = Topic;