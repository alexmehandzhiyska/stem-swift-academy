const db = require('../config/database');

const getAll = (userId) => db.query(`SELECT * FROM topics WHERE course_id IN (SELECT course_id FROM users_courses WHERE user_id = ${userId})`);
const getOne = (lectureId) => db.query(`SELECT * FROM topics WHERE id = $1`, [lectureId]);

module.exports = { getAll, getOne };