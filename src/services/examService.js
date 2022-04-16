const db = require('../config/database');
const Exam = require('../models/Exam');

const getAll = async (subject) => {
    const exams = await Exam.findAll({ where: { subject: subject } });
    return exams.map(exam => exam.dataValues);
}

const getOne = async (id) => {
    const exam = await Exam.findByPk(id);
    return exam.dataValues;
}

const createOne = async(subject, section, instructions, duration, difficulty, link, text) => {
    const exams = await Exam.create({ subject, section, duration, instructions, text, link, difficulty });
    return exams.map(exam => exam.dataValues);
}

const updateOne = async(examId, subject, section, instructions, duration, difficulty, link, text) => {
    const exam = await db.query('UPDATE exams SET subject = $1, section = $2, duration = $3, instructions = $4, text = $5, link = $6, difficulty = $7 WHERE id = $8 RETURNING *', [subject, section, duration, instructions, text, link, difficulty, examId]);
    return exam.rows[0];
}

const deleteOne = (id) => db.query('DELETE FROM exams WHERE id = $1', [id]);

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };