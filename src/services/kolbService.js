const Kolb = require('../../models/index').Kolb;

const getByUser = async (userId) => {
    const kolbsData = await Kolb.findAll({ where: { user_id: userId } });
    return kolbsData.map(kolb => kolb.dataValues);
}

const createOne = async(content, userId) => {
    const kolbData = await Kolb.create({ question: content.question, correct_answer: content.correct_answer, user_answer: content.user_answer, what: content.what, why: content.why, how: content.how, user_id: userId });
    return kolbData.dataValues;
}

module.exports = { getByUser, createOne };