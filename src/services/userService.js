const db = require('../config/database');

const getAll = async (role) => {
    if (role == 'all') {
        return db.query('SELECT id, name, email, role FROM users');
    } else {
        return db.query('SELECT id, name, email, role FROM users WHERE role = $1', [role]);
    }
}

const getOne = async(userId) => {
    const response = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
    const user = response.rows[0];
    return user;
}

const getUserExams = async (userId) => {
    const examsData = await db.query('SELECT exams.id, subject, score FROM users_exams JOIN exams ON users_exams.exam_id = exams.id WHERE user_id = $1', [userId]);
    const exams = examsData.rows;
  
    const questionsData = await db.query('SELECT COUNT(questions.id), subject FROM questions JOIN exams ON questions.exam_id = exams.id WHERE exams.id IN (SELECT exam_id FROM users_exams WHERE user_id = $1) GROUP BY subject', [userId]);
    const questions = questionsData.rows;
  
    return { exams, questions };
}

const updateUsers = async(users) => {
    let result = [];

    for (const user of users) {
        const currentUser = await db.query('UPDATE users SET role = $1 WHERE id = $2', [user.role, user.id]);
        result.push(currentUser)
    }

    return result;
}

module.exports = { getAll, getOne, getUserExams, updateUsers };