const db = require('../config/database');

const getAll = (subject) => db.query('SELECT * FROM exams WHERE subject = $1', [subject]);
const getOne = (id) => db.query('SELECT * FROM exams WHERE id = $1', [id]);

const createOne = async (subject, section, instructions, time, text, link) => {
  const exam = await db.query('INSERT INTO exams (subject, section, time, instructions, text, link) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [subject, section, time, instructions, text, link]);
  return exam.rows[0];
}

const updateOne = async (examId, subject, section, instructions, time, text, link) => {
  const exam = await db.query('UPDATE exams SET subject = $1, section = $2, time = $3, instructions = $4, text = $5, link = $6 WHERE id = $7 RETURNING *', [subject, section, time, instructions, text, link, examId]);
  return exam.rows[0];
}

const deleteOne = (id) => db.query('DELETE FROM exams WHERE id = $1', [id]);

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };