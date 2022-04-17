const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./User');

const Kolb = db.define('kolb', {
    question: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    correctAnswer: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    userAnswer: {
        type: DataTypes.STRING(200)
    },
    what: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    why: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    how: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    freezeTableName: true,
    tableName: 'kolbs',
    timestamps: true
});

Kolb.belongsTo(User, { as: 'User', foreignKey: 'userId', onUpdate: 'cascade', onDelete: 'cascade' });

module.exports = Kolb;

