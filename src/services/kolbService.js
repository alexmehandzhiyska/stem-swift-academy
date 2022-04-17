const Kolb = require('../models/Kolb');

const getByUser = async (userId) => {
    const kolbsData = await Kolb.findAll({ where: { userId: userId } });
    return kolbsData.map(kolb => kolb.dataValues);
}

const createOne = async(content, userId) => {
    const kolbData = await Kolb.create({ question: content.question, correctAnswer: content.correctAnswer, userAnswer: content.userAnswer, what: content.what, why: content.why, how: content.how, userId: userId });
    return kolbData.dataValues;
}

module.exports = { getByUser, createOne };