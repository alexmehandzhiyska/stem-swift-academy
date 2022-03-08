// const Sequelize = require('sequelize');
// const db = require('../config/database');
// const Course = require('./Course');

// const User = db.define('user', {
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: Sequelize.STRING(50),
//         allowNull: false,
//     },
//     email: {
//         type: Sequelize.STRING(70),
//         allowNull: false,
//         isEmail: true
//     },
//     password: {
//         type: Sequelize.STRING(40),
//         allowNull: false,
//         unique: true
//     },
//     role: {
//         type: Sequelize.STRING(30),
//         isIn: [
//             ['student', 'teacher', 'owner']
//         ]
//     }
// });

// User.hasMany(Course);
// Course.belongsToMany(User, { through: 'users_courses' });

// module.exports = User;