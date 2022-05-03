const moment = require('moment');
const Exam = require('../../models/index').Exam;

const getAll = async (examType, subject) => {
    let exams = await Exam.findAll({ where: { type: examType } });
    exams = subject ? exams.filter(exam => exam.subject == subject) : exams;
    return exams.map(exam => exam.dataValues);
}

const getOne = async (id) => {
    const examData = await Exam.findByPk(id);
    const exam = examData.dataValues;

    if (exam.timed) {
        const currentTime = moment().format();
        const startTime = moment(exam.start_time).format();
        const endTime = moment(startTime).add(exam.duration, 'm').format();
        
        const remainingTime = moment(endTime).diff(currentTime, 'miliseconds');
        exam.remainingTime = remainingTime;
    }

    return exam;
}

const createOne = async (examType, title, subject, section, instructions, duration, difficulty, link, text, questions_count) => {
    const exam = await Exam.create({ type: examType, title, subject, section, duration, instructions, text, link, difficulty, questions_count });
    return exam.dataValues;
}

const updateOne = async (examId, examType, title, subject, section, instructions, duration, difficulty, link, text) => {
    const exam = await Exam.update({ examType, title, subject, section, duration, instructions, text, link, difficulty }, { where: { id: examId }, returning: true });
    return exam[1][0].dataValues;
}

const deleteOne = async (id) => {
    const result = await Exam.destroy({ where: { id: id } });
    return result;
}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };