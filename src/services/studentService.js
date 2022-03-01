const db = require('../config/database');

const getOne = async (userId) => {
  const examsData = await db.query('SELECT exams.id, subject, score FROM users_exams JOIN exams ON users_exams.exam_id = exams.id WHERE user_id = $1', [userId]);
  const exams = examsData.rows;

  const questionsData = await db.query('SELECT COUNT(questions.id), subject FROM questions JOIN exams ON questions.exam_id = exams.id WHERE exams.id IN (SELECT exam_id FROM users_exams WHERE user_id = $1) GROUP BY subject', [userId]);
  const questions = questionsData.rows;

  return { exams, questions };
}

module.exports = { getOne };