const { Op } = require('sequelize');
const Exam = require('../models/Exam');
const User = require('../models/User');
const Question = require('../models/Question');
const UserExam = require('../models/UserExam');

const getAll = async (role) => {
    const usersData = role == 'all' ? await User.findAll() : await User.findAll({ where: { role } });
    return usersData.map(user => user.dataValues);
}

const getOne = async (userId) => {
    const userData = await User.findByPk(userId);
    return userData.dataValues;
}

const getUserExams = async (userId) => {
    const userExamsData = await UserExam.findAll({ where: { userId }, include: Exam });
    const userExams = userExamsData.map(userExam => userExam.dataValues);
    const exams = userExams.map(userExam => userExam.exam.dataValues);
  
    const questionsData = await Question.findAll({ where: { examId: { [Op.in]: exams.map(e => e.id) } } });
    const questions = questionsData.map(question => question.dataValues);

    return { results: userExams, questions };
}

const updateUsers = async(users) => {
    let result = [];

    for (const user of users) {
        const currentUserData = await User.update({ role: user.role }, { where: { id: user.id }, returning: true });
        const currentUser = currentUserData[1][0].dataValues;
        result.push(currentUser);
    }

    return result;
}

module.exports = { getAll, getOne, getUserExams, updateUsers };