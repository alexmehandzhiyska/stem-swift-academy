const _ = require('lodash');
const Question = require('../../models/index').Question;
const Answer = require('../../models/index').Answer;
const UserExam = require('../../models/index').UserExam;

const getAll = async(examId, shuffled) => {
    const questionsData = await Question.findAll({ where: { exam_id: examId } });
    const questions = questionsData.map(question => question.dataValues);

    for (const question of questions) {
        const answersData = await Answer.findAll({ where: { question_id: question.id } });
        const answers = answersData.map(a => a.dataValues.content);
        question.choices = shuffled === 'true' ? _.shuffle(answers) : answers;
    }
    
    return questions.sort((a, b) => a.id - b.id);
};

const addQuestions = async(examId, questions, subject) => {
    for (const question of questions) {
        const questionData = await Question.create({ title: question.title, image_url: question.imageUrl, correct_answer: question.correctAnswer, explanation: question.explanation, subject: subject, exam_id: examId });
        const questionId = questionData.dataValues.id;

        await Answer.bulkCreate([ 
            { content: question.correctAnswer, question_id: questionId },
            { content: question.wrongAnswer1, question_id: questionId },
            { content: question.wrongAnswer2, question_id: questionId },
            { content: question.wrongAnswer3, question_id: questionId }
        ]);
    }
    
    return questions;
}

const updateQuestions = async(examId, questions, subject) => {
    for (const question of questions) {
        const questionData = await Question.findOne({ where: { exam_id: examId, title: question.title } });
        const questionId = questionData.dataValues.id;

        await Question.update({ title: question.title, image_url: question.imageUrl, correct_answer: question.correctAnswer, explanation: question.explanation, subject: subject, exam_id: examId }, { where: { id: questionId } });

        await Answer.destroy({ where: { question_id: questionId } });
        await Answer.bulkCreate([
            { content: question.correctAnswer, question_id: questionId },
            { content: question.wrongAnswer1, question_id: questionId },
            { content: question.wrongAnswer2, question_id: questionId },
            { content: question.wrongAnswer3, question_id: questionId }
        ]);
    }

    return { status: 'success' };
}

const calculateScore = async(examId, userId, userAnswers) => {
    const questionsData = await Question.findAll({ where: { exam_id: examId } });

    const correctAnswers = questionsData
    .map(question => question.dataValues.correct_answer)
    .sort((a, b) => a.id - b.id);
    
    const score = correctAnswers
        .filter((a, index) => a === userAnswers[index + 1])
        .length

    const currentScoreData = await UserExam.findOne({ where: { user_id: userId, exam_id: examId } });
    
    if (currentScoreData) {
        await UserExam.update({ score }, { where: { user_id: userId, exam_id: examId } });
    } else {
        await UserExam.create({ user_id: userId, exam_id: examId, score });
    }
    return score;
}

const getScore = async(userId, examId) => {
    const scoreData = await UserExam.findOne({ where: { user_id: userId, exam_id: examId } });
    const score = scoreData.dataValues.score;

    return score;
}

module.exports = { getAll, addQuestions, updateQuestions, calculateScore, getScore };