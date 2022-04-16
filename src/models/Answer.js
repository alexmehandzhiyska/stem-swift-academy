const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Question = require('./Question');

const Answer = db.define('answer', {
    content: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Question,
            key: 'id'
        }
    }
}, {
    freezeTableName: true,
    tableName: 'answers',
    timestamps: true
});

Answer.belongsTo(Question, { as: 'Question', foreignKey: 'questionid' });

module.exports = Answer;