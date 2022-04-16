const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Exam = require('./Exam');

const Question = db.define('question', {
    type: {
        type: DataTypes.STRING(30),
        defaultValue: 'radiogroup'
    },
    title: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    correctAnswer: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    explanation: {
        type: DataTypes.STRING(2000)
    },
    examId: {
        type: DataTypes.INTEGER,
        references: {
            model: Exam,
            key: 'id'
        }
    }
}, {
    freezeTableName: true,
    tableName: 'questions',
    timestamps: true
});

Question.belongsTo(Exam, { as: 'Exam', foreignKey: 'examId' });

module.exports = Question;