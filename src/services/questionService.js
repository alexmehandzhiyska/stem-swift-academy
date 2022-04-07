const db = require('../config/database');
const _ = require('lodash');

const getAll = async(examId, shuffled) => {
    const questionsData = await db.query('SELECT * FROM questions WHERE exam_id = $1', [examId]);
    const questions = questionsData.rows;

    for (const question of questions) {
        const answersData = await db.query('SELECT content FROM answers WHERE question_id = $1', [question.id]);
        const answers = answersData.rows.map(a => a.content);
        question.choices = shuffled === 'true' ? _.shuffle(answers) : answers;
    }

    return questions.sort((a, b) => a.id - b.id);
};


const addQuestions = async(examId, questions) => {
    for (const question of questions) {
        const questionData = await db.query('INSERT INTO questions (title, correct_answer, exam_id) VALUES ($1, $2, $3) RETURNING id', [question.title, question.correctAnswer, examId]);
        const questionId = questionData.rows[0].id;

        await db.query('INSERT INTO answers (content, question_id) VALUES ($1, $5), ($2, $5), ($3, $5), ($4, $5)', [question.correctAnswer, question.wrongAnswer1, question.wrongAnswer2, question.wrongAnswer3, questionId])
    }

    return questions;
}

const updateQuestions = async(examId, questions) => {
    for (const question of questions) {
        const questionData = await db.query('SELECT id FROM questions WHERE exam_id = $1 AND title = $2', [examId, question.title]);
        const questionId = questionData.rows[0].id;

        await db.query('UPDATE questions SET title = $1, correct_answer = $2, exam_id = $3 WHERE id = $4', [question.title, question.correctAnswer, examId, questionId]);
        await db.query('DELETE FROM answers WHERE question_id = $1', [questionId]);
        await db.query('INSERT INTO answers (content, question_id) VALUES ($1, $5), ($2, $5), ($3, $5), ($4, $5)', [question.correctAnswer, question.wrongAnswer1, question.wrongAnswer2, question.wrongAnswer3, questionId]);
    }

    return { status: 'success' };
}

const calculateScore = async(examId, userId, userAnswers) => {
    const correctAnswersData = await db.query('SELECT correct_answer FROM questions WHERE exam_id = $1', [examId]);
    const correctAnswers = correctAnswersData.rows.map(a => a.correct_answer);

    const score = correctAnswers
        .filter((a, index) => a === userAnswers[index])
        .length;

    const currentScore = await db.query('SELECT score FROM users_exams WHERE user_id = $1 AND exam_id = $2', [userId, examId]);

    if (currentScore.rows.length > 0) {
        await db.query('UPDATE users_exams SET score = $1 WHERE user_id = $2 AND exam_id = $3', [score, userId, examId]);
    } else {
        await db.query('INSERT INTO users_exams (user_id, exam_id, score) VALUES ($1, $2, $3)', [userId, examId, score]);
    }
    return score;
}

const getScore = async(userId, examId) => {
    const scoreData = await db.query('SELECT score FROM users_exams WHERE user_id = $1 AND exam_id = $2', [userId, examId]);
    const score = await scoreData.rows[0].score;

    return score;
}

module.exports = { getAll, addQuestions, updateQuestions, calculateScore, getScore };