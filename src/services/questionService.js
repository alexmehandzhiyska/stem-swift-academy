const _ = require('lodash');
const Question = require('../models/Question');
const Answer = require('../models/Answer');
const UserExam = require('../models/UserExam');

const getAll = async(examId, shuffled) => {
    const questionsData = await Question.findAll({ where: { examId: examId } });
    const questions = questionsData.map(question => question.dataValues);

    for (const question of questions) {
        const answersData = await Answer.findAll({ where: { questionId: question.id } });
        const answers = answersData.map(a => a.dataValues.content);
        question.choices = shuffled === 'true' ? _.shuffle(answers) : answers;
    }
    
    return questions.sort((a, b) => a.id - b.id);
};

const addQuestions = async(examId, questions) => {
    for (const question of questions) {
        const questionData = await Question.create({ title: question.title, correctAnswer: question.correctAnswer, examId: examId });
        const questionId = questionData.dataValues.id;

        await Answer.bulkCreate([ 
            { content: question.correctAnswer, questionId: questionId },
            { content: question.wrongAnswer1, questionId: questionId },
            { content: question.wrongAnswer2, questionId: questionId },
            { content: question.wrongAnswer3, questionId: questionId }
        ]);
    }
    
    return questions;
}

const updateQuestions = async(examId, questions) => {
    for (const question of questions) {
        const questionData = await Question.findOne({ where: { examId: examId, title: question.title } });
        const questionId = questionData.dataValues.id;

        await Question.update({ title: question.title, correctAnswer: question.correctAnswer, examId: examId }, { where: { id: questionId } });

        await Answer.destroy({ where: { questionId: questionId } });
        await Answer.bulkCreate([
            { content: question.correctAnswer, questionId: questionId },
            { content: question.wrongAnswer1, questionId: questionId },
            { content: question.wrongAnswer2, questionId: questionId },
            { content: question.wrongAnswer3, questionId: questionId }
        ]);
    }

    return { status: 'success' };
}

const calculateScore = async(examId, userId, userAnswers) => {
    const questionsData = await Question.findAll({ where: { examId: examId } });
    const correctAnswers = questionsData.map(question => question.dataValues.correctAnswer);

    const score = correctAnswers
        .filter((a, index) => a === userAnswers[index + 1])
        .length;

    const currentScoreData = await UserExam.findOne({ where: { userId: userId, examId: examId } });
    
    if (currentScoreData) {
        await UserExam.update({ score }, { where: { userId, examId } });
    } else {
        await UserExam.create({ userId, examId, score });
    }
    return score;
}

const getScore = async(userId, examId) => {
    const scoreData = await UserExam.findOne({ where: { userId, examId } });
    const score = scoreData.dataValues.score;

    return score;
}

module.exports = { getAll, addQuestions, updateQuestions, calculateScore, getScore };