const Exam = require('../../models/index').Exam;

const getAll = async (subject) => {
    const exams = await Exam.findAll({ where: { subject: subject } });
    return exams.map(exam => exam.dataValues);
}

const getOne = async (id) => {
    const exam = await Exam.findByPk(id);
    return exam.dataValues;
}

const createOne = async (subject, section, instructions, duration, difficulty, link, text) => {
    const exam = await Exam.create({ subject, section, duration, instructions, text, link, difficulty });
    return exam.dataValues;
}

const updateOne = async (examId, subject, section, instructions, duration, difficulty, link, text) => {
    const exam = await Exam.update({ subject, section, duration, instructions, text, link, difficulty }, { where: { id: examId }, returning: true });
    return exam[1][0].dataValues;
}

const deleteOne = async (id) => {
    const result = await Exam.destroy({ where: { id: id } });
    return result;
}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };