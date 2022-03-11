const db = require('../config/database');

const getAll = (subject) => db.query('SELECT * FROM exams WHERE subject = $1', [subject]);
const getOne = (id) => db.query('SELECT * FROM exams WHERE id = $1', [id]);

const createOne = async(subject, section, instructions, duration, difficulty, link, text) => {
    const exam = await db.query('INSERT INTO exams (subject, section, duration, instructions, text, link) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [subject, section, duration, instructions, text, link]);
    return exam.rows[0];
}

const updateOne = async(examId, subject, section, instructions, difficulty, duration, text, link) => {
    const exam = await db.query('UPDATE exams SET subject = $1, section = $2, duration = $3, instructions = $4, text = $5, link = $6, difficulty = $7 WHERE id = $8 RETURNING *', [subject, section, duration, instructions, text, link, difficulty, examId]);
    return exam.rows[0];
}

const deleteOne = (id) => db.query('DELETE FROM exams WHERE id = $1', [id]);

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };