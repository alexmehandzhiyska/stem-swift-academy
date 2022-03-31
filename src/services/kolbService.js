const db = require('../config/database');

const getByUser = async (userId) => {
    const data = await db.query('SELECT id FROM notebooks WHERE user_id = $1', [userId]);
    const notebookId = data.rows[0].id;

    const kolbsData = await db.query('SELECT * FROM kolbs WHERE notebook_id = $1', [notebookId]);
    return kolbsData.rows;
}

const createOne = async(content, userId) => {
    const data = await db.query('SELECT id FROM notebooks WHERE user_id = $1', [userId]);
    const notebookId = data.rows[0].id;

    const kolb = await db.query('INSERT INTO kolbs (question, correct_answer, user_answer, what, why, how, notebook_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [content.question, content.correctAnswer, content.userAnswer, content.what, content.why, content.how, notebookId]);
    return kolb.rows[0];
}

module.exports = { getByUser, createOne };